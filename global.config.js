const config = {
    imageSizes: [320, 860, 1200], //Width
    squareSize: 500,
    colorMapDepth: 5,
    allowedFileExtensions: ['jpg', 'jpeg', 'png']
}

module.exports = {
    get: getConfig()
};

function getConfig(){
    return config;
}