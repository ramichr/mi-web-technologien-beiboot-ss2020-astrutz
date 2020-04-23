# PictureBox

PictureBox is a website to upload and (soon) manipulate images. It could let me pass through the beiboot project.

## Installation

PictureBox runs with [Docker](https://www.docker.com/). To run it locally follow these steps:

* Install Docker [here](https://docs.docker.com/get-docker/)
* Clone this repository with `git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz.git`.

## Build

* Open the folder with a terminal
* Execute the command `docker build -t picturebox .`

## Run

* Execute the command `docker run -p <PORT>:3000 picturebox`
* Open `http://localhost:<PORT>` and use the app

With `<PORT>` you can specify at which port the app should run.