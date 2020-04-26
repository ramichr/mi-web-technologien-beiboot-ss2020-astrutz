# Use sharp as image manipulation and processing tool

* Date: 2020-04-26

## Context and Problem Statement

To resize and save pictures in a specific file extension a library is needed to perform image related actions. 

## Considered Options

* JIMP
* Sharp

## Decision Outcome

Chosen option: "Sharp", because 
* less boilerplate code
* automatic calculation of width when only height is given at a resize

## Links

[sharp](https://www.npmjs.com/package/sharp)
[JIMP](https://www.npmjs.com/package/jimp)