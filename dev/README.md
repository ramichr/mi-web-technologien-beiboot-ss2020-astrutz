# Frontend dev enviroment

The frontend dev enviroment can be used to develop using the server API for image data. It should be used to develop feature #7.

## Installation

The frontend dev enviroment runs with [Docker](https://www.docker.com/). To run it locally follow these steps:

* Install Docker [here](https://docs.docker.com/get-docker/)
* Clone this repository with `git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz.git`.
* Change directory to `/dev`

## Run
DEV mode with reload: `npm run dev`  
PROD mode: `npm run prod`
It runs at `http://localhost:4000`. To get images you can open `http://localhost:4000/api`, see [API Reference](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz#api-reference) for more information.

## Stop
To stop the container just basically hit `CTRL-C`.

## Buildchain
In order to use different development tools, a buildchain is configured in the following order:   

`JavaScript Lint -> SCSS Lint -> SASS -> Clean CSS -> Minify -> Run application`  

When using the dev mode, these chain runs after every save (aka hot reload).

### JavaScript Lint
This project uses [ESLint](https://eslint.org/docs/user-guide/getting-started) and the [airbnb styleguide](https://github.com/airbnb/javascript). In production mode it logs warnings and runs the buildchain anyway. In dev mode it won't log warnings, because it would abort the lint process re-invocation.

### SCSS Lint
This project uses [stylelint](https://stylelint.io/) and the [stylelint scss](https://github.com/kristerkari/stylelint-scss) rules.

### SASS
CSS precompiling is implemented with [SASS](https://www.npmjs.com/package/sass). It compiles and minifies the `style.scss` in `/src/css` and copies it to `/dist/style.min.css`, which is used by `/dist/index.html`.

### Clean CSS
Compiled CSS is cleaned with [PurgeCSS](https://purgecss.com/CLI.html#installation). PurgeCSS removes all CSS selectors from `/dist/style.min.css`, which are not used in `dist/index.html`.

### Minify
Minification is implemented with [Babel](https://babeljs.io/). It compiles and minifies the `main.js` in `/src/js` and copies it to `/dist/main.min.js`, which is used by `/dist/index.html`.

## Structure
The working directory for frontend development is the folder `/src`, in which all neccessary files are located. This directory is accessible as a express static folder on route `/`, i.e. `localhost:4000/main.min.js` for `dist/main.min.js`.

### Stylesheet
The Stylesheet to work with is located in `/src/css/style.scss` and supports SCSS. It will be processed via SASS and minify to `/dist/style.min.css`.

### JavaScript
The JavaScript to work with is located in `/src/js/main.js`. The requested images are loaded via HTTP and stored into `const images[]` and can be used from there. It will be processed via minify to `/dist/main.min.js`.

### HTML
The HTML to work with is located in `/src/dist/index.html`. It uses the minified Stylesheet and JavaScript. 
