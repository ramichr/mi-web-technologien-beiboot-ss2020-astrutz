# Use PurgeCSS as CSS cleaner

* Status: accepted
* Date: 2020-08-11

## Context and Problem Statement

To remove unused SCSS a tool is needed to clear obsolete code before minification.

## Considered Options

* PurgeCSS
* UnusedCSS
* UnCSS

## Decision Outcome

Chosen option: "PurgeCSS"

### Positive Consequences

* Large support provided
* Fully integrated in Node.js
* Own CLI which can be used

### Negative Consequences

* It needs some learning if should be used advanced

## Pros and Cons of the Options

### PurgeCSS

* Good, because it's compatible with Node.js
* Good, because it provides a CLI
* Good, because it's very small
* Good, because it works with SCSS
* Good, because it works with multiple files at once
* Bad, because it needs some learning at first

### UnusedCSS

* Good, because it has a SLA
* Bad, because it costs a lot
* Bad, because it needs a deployed and public page
* Bad, because it's not usable in a development enviroment

### UnCSS

* Good, because it's comparable small
* Good, because it provides a large CLI
* Bad, because it's version isn't stable at the moment (still in beta)
* Bad, because it doesn't work with SCSS
* Bad, because it's specialized for PostCSS

## Links

* [PurgeCSS](https://purgecss.com/)
* [UnusedCSS](https://unused-css.com/)
* [UnCSS](https://www.npmjs.com/package/uncss)
