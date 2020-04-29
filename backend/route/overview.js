const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const config = require('../global.config').get;
//define width for mobile, tablet and desktop
const imageSizes = config.imageSizes;

router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname + '/../files/original'), (err, files) => {
        if (err)
            res.status(502).send("Can't load images");
        fs.readdir(path.join(__dirname + '/../files/colormaps'), (err, maps) => {
            if (err)
                res.status(502).send("Can't load images");
            res.render('overview', { images: files, sizes: imageSizes, colormaps: maps });
        });
    });
});

router.delete('/:fileName', (req, res) => {
    let fileName = req.params.fileName;
    let allSizes = ['original', 'square', 'custom'];
    allSizes.push(imageSizes);
    fs.unlinkSync(path.join(__dirname + '/../files/original/' + fileName));
    fs.unlinkSync(path.join(__dirname + '/../files/square/' + fileName));
    fs.unlinkSync(path.join(__dirname + '/../files/custom/' + fileName));
    for (let sizeName in imageSizes) {
        fs.unlinkSync(path.join(__dirname + '/../files/' + imageSizes[sizeName] + '/' + fileName));
    }
    fs.unlinkSync(path.join(__dirname + '/../files/colormaps/' + fileName + '.json'));

});

module.exports = router;