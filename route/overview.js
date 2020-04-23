const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const config = require('../global.config');
//define width for mobile, tablet and desktop
const imageSizes = config.imageSizes;

router.get('/', (req, res) => {
    fs.readdir(path.join(__dirname + '/../files/original'), (err, files) => {
        if (err)
            res.status(502).send("Can't load images");
        res.render('overview', { images: files, sizes: imageSizes });
    });
});

router.delete('/:fileName', (req, res) => {
    let fileName = req.params.fileName;
    let allSizes = config.imageSizes;
    allSizes.push('original', 'square', 'custom');
        for (let sizeName in allSizes) {
        fs.unlinkSync(path.join(__dirname + '/../files/' + allSizes[sizeName] + '/' + fileName));
    }
});

module.exports = router;