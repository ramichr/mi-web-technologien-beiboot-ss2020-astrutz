# Use ESLint as CSS code quality tool

* Status: accepted
* Date: 2020-08-11

## Context and Problem Statement

To increase the CSS code quality a tool for control should be implemented.

## Considered Options

* Stylelint
* CSSLint
* CSSNano

## Decision Outcome

Chosen option: "Stylelint"

### Positive Consequences

* Large support provided
* Fully integrated in Node.js
* Large rule sets to modify (over 170 rules)
* Possibilty to use plugins

### Negative Consequences

* It inflates the project size (npm module alone > 1MB)

## Pros and Cons of the Options

### Stylelint

* Good, because it's compatible with Node.js
* Good, because it provides modules and individual implementations
* Good, because it minifies files
* Good, because it automatically fixes minor issues
* Bad, because it's module is large

### CSSLint

* Good, because it's compatible with Node.js
* Good, because it provides a CLI
* Good, becuase it can be integrated into IDEs
* Bad, because it doesn't provide rulse sets
* Bad, because it isn't used very much

### CSSNano

* Good, because it's very small (< 30KB)
* Good, because it's compatible with Node.js
* Bad, because it's version isn't stable at the moment
* Bad, because it's a tool based on a website
* Bad, because it only got a few rule sets (below 40)

## Links

* [Stylelint](https://stylelint.io/)
* [CSSLint](http://csslint.net/)
* [CSSNano](https://cssnano.co/)
