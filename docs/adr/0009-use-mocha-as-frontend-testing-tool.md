# Use Mocha as frontend testing framework

* Status: superseded by [ADR-0002](0002-use-mocha-as-backend-testing-framework.md) <!-- optional -->
* Date: 2020-08-11

## Context and Problem Statement

To provide testing in the frontend development enviroment, a test framework is needed.

## Considered Options

* Mocha
* Jest
* Jasmine
* Karma

## Decision Outcome

Chosen option: "Mocha", because 
* Operates on Node.js
* Can be used for backend and frontend testing
* Request-Package to test every REST-endpoint with different payloads

## Links
* [Mocha](https://mochajs.org/)
* [Jest](https://jestjs.io/)
* [Jasmine](https://jasmine.github.io/)
* [Karma](https://karma-runner.github.io/)

