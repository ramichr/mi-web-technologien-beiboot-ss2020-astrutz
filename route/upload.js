const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const getColors = require('get-image-colors')
const path = require('path');
const jimp = require('jimp');
const config = require('../global.config');
const fs = require('fs');
//define width for mobile, tablet and desktop
const imageSizes = config.imageSizes;
const squareSize = config.squareSize;

router.get('/', (req, res) => {
    res.render('upload');
});

router.post('/', (req, res) => {
    try {
        const form = formidable({multiples: true});
        form.parse(req, async (err, fields, files) => {
            if (err) {
                res.render('uploadFailed', {fields, files, error: err});
            }

            let fileType = files.file.name.split('.')[files.file.name.split('.').length - 1].toLowerCase();
            if (!config.allowedFileExtensions.includes(fileType)) {
                res.render('uploadFailed', {fields, files, error: fileType + " is not a supported file type."});
                return;
            }

            let filePath = files.file.path;
            let file = await jimp.read(filePath);

            let originalPath = path.join(__dirname + '/../files/original/' + files.file.name);

            //save original version
            file.write(originalPath);

            //save square version
            file.resize(squareSize, squareSize).write(path.join(__dirname + '/../files/square/' + files.file.name));

            //save 3 versions for mobile, tablet and desktop
            for (let i in imageSizes) {
            
                file
                    .resize(parseInt(imageSizes[i]), jimp.AUTO)
                    .write(path.join(__dirname + '/../files/' + imageSizes[i] + '/' + files.file.name));
            }

            //save custom version
            file.resize(parseInt(fields.width), parseInt(fields.height)).write(path.join(__dirname + '/../files/custom/' + files.file.name));

            //TODO: Show these in Web Tech
            //let process = fork(path.join(__dirname + '/../modules/colorMapper/index.js'));
            //process.send(files.file);
            let colors = await getColors(originalPath);
            fs.writeFileSync(path.join(__dirname + '/../files/colormaps/' + files.file.name), JSON.stringify(colors));

            res.render('uploadSuccess', {fields, files});
        });
    } catch (err) {
        res.render('uploadFailed', {fields, files, error: err});
    }
});

module.exports = router;