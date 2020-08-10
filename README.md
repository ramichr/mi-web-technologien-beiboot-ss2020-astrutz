# PictureBox

PictureBox is a website to upload and (soon) manipulate images. It could let me pass through the beiboot project.

## Frontend Development Enviroment
Information on the dev enviroment can be found in it's [README.md](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz/tree/master/dev/README.md).

## Server Enviroment

### Installation

PictureBox runs with [Docker](https://www.docker.com/). To run it locally follow these steps:

* Install Docker [here](https://docs.docker.com/get-docker/)
* Clone this repository with `git clone https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-astrutz.git`.

### Build

* Open the folder with a terminal
* Execute the command `docker-compose build`

### Run server

* Execute the command `docker-compose up`
* Open `http://localhost:3000` and use the app

#### Scaffold images
To get 30 sample images to work with you can do the following:

* Run the server as mentioned before
* Install dependencies via `npm install`
* Execute the command `npm run scaffolding`
* Open `http://localhost:3000/overview` to see the generated images

### Stop server

* Execute the command `docker-compose down`

### API Reference
Informations for images can be called by an API when the server is running.

#### Endpoint

`http://localhost:3000/api`

#### Header Fields

| Header Field | Value                           |
|--------------|---------------------------------|
| Content-Type | *Required* <br>application/json |

#### Query Parameters

| Query Parameter | Value  | Default      |
|-----------------|--------|--------------|
| sort  | *Optional* <br>Defines the order of the elements. <br>Possible values: `alphabetic`, `date`, `color`, `random`  | "alphabetic" |
| count | *Optional*<br>Defines the number of elements.<br>If the given number exceeds the number of elements, all elements will be returned. | 10  |

#### Response

##### Response Object

| Key   | Value Type             | Value Description                            |
|-------|------------------------|----------------------------------------------|
| sort  | String                 | Choosen sort option                          |
| count | Integer                | Number of actual returned image informations |
| items | Array of Image Objects | Returned image informations                  |

##### Image Object

| Key    | Value Type                                                                     | Value Description                   |
|--------|--------------------------------------------------------------------------------|-------------------------------------|
| name   | String                                                                         | Filename with extension             |
| colors | Array of [get-image-colors objects](http://npmjs.org/package/get-image-colors) | Five most dominant colors per image |
| primaryColor   | String                                                                           | HEX-Code of most dominant color             |
| date   | long                                                                           | Timestamp when uploaded             |
| url    | String                                                                         | Relative URL to get the image       |

## Workload

* [Issue#1](https://github.com/mi-classroom/mi-master-wt-beiboot-2020/issues/1) - 16h
* [Issue#2](https://github.com/mi-classroom/mi-master-wt-beiboot-2020/issues/2) - 8h
* [Issue#3](https://github.com/mi-classroom/mi-master-wt-beiboot-2020/issues/3) - 2h
* [Issue#4](https://github.com/mi-classroom/mi-master-wt-beiboot-2020/issues/4) - 4h
* [Issue#5](https://github.com/mi-classroom/mi-master-wt-beiboot-2020/issues/5) - 4h
