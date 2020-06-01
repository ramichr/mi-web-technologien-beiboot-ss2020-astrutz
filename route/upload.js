const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const getColors = require('get-image-colors')
const path = require('path');
const sharp = require('sharp');
const config = require('../global.config').get;
const fs = require('fs');
//define width for mobile, tablet and desktop
const imageSizes = config.imageSizes;
const squareSize = config.squareSize;

router.get('/', (req, res) => {
    res.render('upload');
});

router.post('/', (req, res) => {
    try {
        const form = formidable({ multiples: true });
        form.parse(req, async (err, fields, files) => {

            if (err) {
                res.render('uploadFailed', { fields, files, error: err });
            }

            let fileType = files.file.name.split('.')[files.file.name.split('.').length - 1].toLowerCase();
            let fileNameWithoutExtension = files.file.name.split('.')[0].toLowerCase();
            if (!config.allowedFileExtensions.includes(fileType)) {
                res.render('uploadFailed', { fields, files, error: fileType + " is not a supported file type." });
                return;
            }

            let originalPath = path.join(__dirname + '/../files/original/' + fileNameWithoutExtension + '.png');

            let filePath = files.file.path;

            //save original version
            await sharp(filePath)
                .png()
                .toFile(originalPath);

            //save square version
            await sharp(filePath)
                .resize(squareSize, squareSize)
                .png()
                .toFile(path.join(__dirname + '/../files/square/' + fileNameWithoutExtension + '.png'));

            //save 3 versions for mobile, tablet and desktop
            for (let i in imageSizes) {
                await sharp(filePath)
                    .resize(parseInt(imageSizes[i]))
                    .png()
                    .toFile(path.join(__dirname + '/../files/' + imageSizes[i] + '/' + fileNameWithoutExtension + '.png'));
            }

            //save custom version
            await sharp(filePath)
                .resize(parseInt(fields.width), parseInt(fields.height))
                .png()
                .toFile(path.join(__dirname + '/../files/custom/' + fileNameWithoutExtension + '.png'));


            let colors = await getColors(originalPath);
            fs.writeFileSync(path.join(__dirname + '/../files/colormaps/' + fileNameWithoutExtension + '.json'), JSON.stringify(colors));
            if (req.headers.pb) {
                res.sendStatus(200);
            } else {
                res.render('uploadSuccess', { fields, files });
            }
        });
    } catch (err) {
        if (req.headers.pb) {
            res.sendStatus(500);
        } else {
            res.render('uploadFailed', { fields, files, error: err });
        }
    }
});

module.exports = router;