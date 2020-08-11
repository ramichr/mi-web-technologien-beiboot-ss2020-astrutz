# Use SASS as CSS pre-processor

* Status: accepted
* Date: 2020-08-11

## Context and Problem Statement

To provide the dev frontend enviroment with dynamic css, a css proprocessor should be used to compile and minify CSS.

## Considered Options

* SASS
* LESS
* Stylus

## Decision Outcome

Chosen option: "SASS"

### Positive Consequences

* Large support provided
* Fully integrated in Node.js
* Files are already minified

### Negative Consequences

* It inflates the project size (npm module alone > 3MB)

## Pros and Cons of the Options

### SASS

* Good, because it's compatible with Node.js
* Good, because it provides modules and individual implementations
* Good, because it minifies files
* Bad, because it relies on Dart and not JavaScript
* Bad, because it's module is large

### LESS

* Good, because it's compatible with Node.js
* Good, because it provides modules and individual implementations
* Bad, because it doesn't minify files
* Bad, because it's module is large, but doesn't even contain a default preprocessing (so it's even larger than SASS)

### Stylus

* Good, because it's comparable small
* Good, because it's compatible with Node.js
* Bad, because it's version isn't stable at the moment
* Bad, because it doesn't minify files

## Links

* [SASS](https://sass-lang.com/)
* [LESS](http://lesscss.org/)
* [Stylus](https://stylus-lang.com/)
