# Use Babel as JavaScript Compiler

* Status: accepted
* Date: 2020-08-11

## Context and Problem Statement

To make JavaScript compatible with most browsers and minify it, a compiler is needed.

## Considered Options

* Babel
* Sucrase
* SWC

## Decision Outcome

Chosen option: "Babel"

### Positive Consequences

* Large support provided
* Large community and extensions
* Files are already minified
* Compatible with live reload

### Negative Consequences

* Everything other than core functionality needs a lot of learning

## Pros and Cons of the Options

### Babel

* Good, because it's compatible with Node.js
* Good, because it provides modules and individual implementations
* Good, because it minifies files
* Good, because it provides a CLI
* Bad, because it's not easy to use
* Bad, because it's module structure is hard to learn and understand

### Sucrase

* Good, because it's faster than Babel
* Bad, because it doesn't provide modules and individual implementations
* Bad, because it doesn't minify files
* Bad, because it doesn't provide support for old browsers
* Bad, because its focus relies on React and TypeScript

### SWC

* Good, because it's faster than Babel
* Good, because it provides a CLI
* Bad, because it only provides few helpers/modules
* Bad, because it seems to only adapt into Babel
* Bad, because it doesn't minify files

## Links

* [Babel](https://babeljs.io/)
* [Sucrase](https://github.com/alangpierce/sucrase)
* [SWC](https://swc-project.github.io/)
