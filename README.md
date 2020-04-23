# PictureBox

PictureBox is a website to upload and (soon) manipulate images. It could let me pass through the beiboot project.

## Build and Run the app

PictureBox runs with [Docker](https://www.docker.com/). To run it locally follow these steps:

1. Install Docker [here](https://docs.docker.com/get-docker/)
2. Clone this repository with `git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz.git`.
3. Open the folder with a terminal
4. To build the app use `docker build -t picturebox .`
5. To run the app use `docker run -p <PORT>:3000 picturebox`
6. Open `http://localhost:<PORT>` and use the app

With `<PORT>` you can specify at which port the app should run.