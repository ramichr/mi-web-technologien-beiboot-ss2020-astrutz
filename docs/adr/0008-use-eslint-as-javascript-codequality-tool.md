# Use ESLint as JavaScript code quality tool

* Status: accepted
* Date: 2020-08-11

## Context and Problem Statement

To increase the JavaScript code quality a tool for control should be implemented.

## Considered Options

* ESLint
* JSLint
* JSHint

## Decision Outcome

Chosen option: "ESLint"

### Positive Consequences

* Large support provided
* Large community and extensions
* Rule sets can be adapted by developers easily

### Negative Consequences

* Understanding rules needs a lot of learning at first
* Warnings can't be turned on with live reload

## Pros and Cons of the Options

### ESLint

* Good, because it's compatible with Node.js
* Good, because it provides individual rule sets
* Good, because it provides a CLI
* Good, because it's well documented
* Good, because it provides some pre-defined style guides
* Bad, because it's not easy to use at first
* Bad, because it blocks live reload on warnings

### JSLint

* Bad, because it only accepts few rules
* Bad, because it's not much supported
* Bad, because it's not suitable for live reload

### JSHint

* Good, because it's widely used
* Good, because it's smaller than ESLint
* Good, because it has some IDE implementations
* Bad, because it doesn't provide performance tests
* Bad, because it's CLI isn't very configurable

## Links

* [ESLint](https://eslint.org/docs/user-guide/getting-started)
* [JSLint](https://www.npmjs.com/package/jslint)
* [JSHint](https://www.npmjs.com/package/jshint)
