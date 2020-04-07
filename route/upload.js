const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const sharp = require('sharp');
const config = require('../global.config');
//define width for mobile, tablet and desktop
const imageSizes = config.imageSizes;
const squareSize = config.squareSize;

router.get('/', (req, res) => {
    res.render('upload');
});

router.post('/', (req, res) => {
    const form = formidable({multiples: true});
    form.parse(req, async (err, fields, files) => {
        if (err) {
            res.status(500).send("Upload failed!");
        }
        let filePath = files.file.path;

        //save original version
        await sharp(filePath)
            .png()
            .toFile(path.join(__dirname + '/../files/original/' + files.file.name));

        //save square version
        await sharp(filePath)
            .resize(squareSize, squareSize)
            .png()
            .toFile(path.join(__dirname + '/../files/square/' + files.file.name));

        //save 3 versions for mobile, tablet and desktop
        for (let i in imageSizes) {
            await sharp(filePath)
                .resize(imageSizes[i])
                .png()
                .toFile(path.join(__dirname + '/../files/' + imageSizes[i] + '/' + files.file.name));
        }

        //save custom version
        await sharp(filePath)
            .resize(parseInt(fields.width), parseInt(fields.height))
            .png()
            .toFile(path.join(__dirname + '/../files/custom/' + files.file.name));

        //TODO: Upload to a better place
        res.render('uploadSuccess', {fields, files});
    });
});
module.exports = router;