# Use get-image-colors as color extractor

* Date: 2020-04-26

## Context and Problem Statement

The extraction of the main colors of an image requires a library or a self built solution on the serverside.

## Considered Options

* get-image-colors
* own solution
* extract-colors

## Decision Outcome

Chosen option: "get-image-colors", because 
* fast performance, even with larger images
* number of extracted colors can be defined
* can be directly safed into a json file

## Links
* [get-image-colors](https://www.npmjs.com/package/get-image-colors)
* [own solution](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz/blob/master/modules/colorMapper/index.js)
* [extract-colors](https://www.npmjs.com/package/extract-colors)