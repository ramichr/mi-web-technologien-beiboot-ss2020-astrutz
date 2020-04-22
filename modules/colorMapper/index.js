const fs = require('fs');
const path = require('path');
const config = require('../../global.config');

module.exports = function(image, name){
    let json = [];
    for(let i = 0; i < image.getWidth(); i++){
        for(let j = 0; j < image.getHeight(); j++){
            let color = image.getPixelColor(i, j).toString(16).substr(0, 6);
            if (json.filter(e => e.color === color).length > 0) {
                json.filter(e => e.color === color)[0].count++;
            } else {
                json.push({'color': color, 'count': 1});
            }
            console.log(i);
        }
    }
    json.sort(function(a, b){return b.count - a.count});
    fs.writeFileSync(path.join(__dirname + '/../../files/colormaps/' + name + '.json'), JSON.stringify(json.slice(0, config.colorMapDepth)));
};