const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    let count = req.query.count || 10;
    let sort = req.query.sort || 'alphabetic';
    let response = {};
    response.items = getImages(count, sort);
    response.count = response.items.length < count ? response.items.length : count;
    response.sort = sort;
    res.send(response);
});

function getImages(count, sort){
    let images = [];
    let fileNames = fs.readdirSync(path.join(__dirname + '/../files/original'));
    if(fileNames.length < count){
        count = fileNames.length;
    }
    switch(sort){
        case 'alphabetic': fileNames = fileNames.sort().slice(0, count); break;
        case 'date': fileNames = fileNames.sort(sortByDate).slice(0, count); break;
        case 'color': fileNames = fileNames.sort(sortByColor).slice(0, count); break;
        case 'random': fileNames = shuffle(fileNames).slice(0, count); break;
    }
    for(let i in fileNames){
        images.push(buildImageInformation(fileNames[i]));
    }

    return images;
}

// Fisher-Yates shuffle algorithm
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
} 

function sortByDate(a, b){
    let dateStringA = fs.statSync(path.join(__dirname + '/../files/original/'+ a)).birthtime;
    let dateStringB = fs.statSync(path.join(__dirname + '/../files/original/'+ b)).birthtime;
    let timestampA = new Date(dateStringA).getTime();
    let timestampB = new Date(dateStringB).getTime();
    return timestampA - timestampB;
}

function sortByColor(a, b){
    let colorObjectA = getColorObject(a)[0]._rgb;
    let colorObjectB = getColorObject(b)[0]._rgb;
    let hslA = rgbToHsl(colorObjectA);
    let hslB = rgbToHsl(colorObjectB);
    return hslA[0] - hslB[0];
}

function buildImageInformation(fileName){
    let image = {};
    let date = fs.statSync(path.join(__dirname + '/../files/original/'+ fileName)).birthtime;
    let url = `/files/original/${fileName}`;
    image.name = fileName;
    image.date = new Date(date).getTime();
    image.colors = getColorObject(fileName);
    image.primaryColor = rgbToHex(image.colors[0]._rgb);
    image.url = url;
    return image;
}

function getColorObject(fileName){
    let colorMapName = fileName.split('.')[0] + '.json';
    return JSON.parse(fs.readFileSync(path.join(__dirname + '/../files/colormaps/'+ colorMapName), 'UTF-8'));
}

//https://stackoverflow.com/questions/11923659/javascript-sort-rgb-values
function rgbToHsl(c) {
    var r = c[0]/255, g = c[1]/255, b = c[2]/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if(max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return new Array(h * 360, s * 100, l * 100);
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(rgbObject) {
    return "#" + componentToHex(rgbObject[0]) + componentToHex(rgbObject[1]) + componentToHex(rgbObject[2]);
  }
  
module.exports = router;
