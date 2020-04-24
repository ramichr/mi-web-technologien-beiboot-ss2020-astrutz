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
            if (!config.allowedFileExtensions.includes(fileType)) {
                res.render('uploadFailed', { fields, files, error: fileType + " is not a supported file type." });
                return;
            }

            let originalPath = path.join(__dirname + '/../files/original/' + files.file.name);

            let filePath = files.file.path;

            //save original version
            await sharp(filePath)
                .png()
                .toFile(originalPath);

            //save square version
            await sharp(filePath)
                .resize(squareSize, squareSize)
                .png()
                .toFile(path.join(__dirname + '/../files/square/' + files.file.name));

            //save 3 versions for mobile, tablet and desktop
            for (let i in imageSizes) {
                console.log(imageSizes[i]);
                await sharp(filePath)
                    .resize(parseInt(imageSizes[i]))
                    .png()
                    .toFile(path.join(__dirname + '/../files/' + imageSizes[i] + '/' + files.file.name));
            }

            //save custom version
            await sharp(filePath)
                .resize(parseInt(fields.width), parseInt(fields.height))
                .png()
                .toFile(path.join(__dirname + '/../files/custom/' + files.file.name));


            //TODO: Show these in Web Tech
            //let process = fork(path.join(__dirname + '/../modules/colorMapper/index.js'));
            //process.send(files.file);
            let colors = await getColors(originalPath);
            fs.writeFileSync(path.join(__dirname + '/../files/colormaps/' + files.file.name + '.json'), JSON.stringify(colors));

            res.render('uploadSuccess', { fields, files });
        });
    } catch (err) {
        res.render('uploadFailed', { fields, files, error: err });
    }
});

module.exports = router;