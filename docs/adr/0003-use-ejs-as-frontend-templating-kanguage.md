# Use EJS as frontend templating language

* Status: proposed
* Date: 2020-04-25

## Context and Problem Statement

To render dynamic content (such as an image overview) a templating frontend language is needed to reuse components.

## Considered Options

* EJS
* React
* Vue

## Decision Outcome

Chosen option: "EJS", because 

* PHP-style inline JS is easy to follow
* Simple to set up as a express view engine
* No boilerplate code needed

## Note

This may change if the requirements for this app change. For this reason it only got the status "proposed"