The frontend dev enviroment can be used to develop using the server API for image data. It should be used to develop feature #7.

## Installation

PictureBox runs with [Docker](https://www.docker.com/). To run it locally follow these steps:

* Install Docker [here](https://docs.docker.com/get-docker/)
* Clone this repository with `git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz.git`.

## Run
DEV mode with reload: `npm run dev`  
PROD mode: `npm run prod`
It runs at `http://localhost:4000`. To get images you can open `http://localhost:4000/api`, see [API Reference](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz#api-reference) for more information.

## Structure

### Stylesheet
The Stylesheet to work with is located in `/src/css/style.scss` and supports SCSS. It will be processed via SASS and minify to `/dist/style.min.css`.

### JavaScript
The JavaScript to work with is located in `/src/js/main.js`. The requested images are loaded via HTTP and stored into `const images[]` and can be used from there. It will be processed via minify to `/dist/main.min.js`.

### HTML
The HTML to work with is located in `/src/dist/index.html`. It uses the minified Stylesheet and JavaScript. 
