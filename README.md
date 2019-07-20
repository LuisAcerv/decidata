# Detections dashboard

Full stack application to track the detections from CSV file using `Python` and `React`.

## See the live demo!

https://decidatatv.luisacerv.dev/

## Backend

Python API using [flask-restful](https://flask-restful.readthedocs.io) to serve a single `GET` endpoint `/detections` which will return a `JSON` object with the channels, brands, commercials, dates and detections.

### Python version:

- `python 3.6`

### How to run?

In order to make easier to run the project I have used docker, to run the project using docker run the following commands:

- 1. In the projject root folder `cd api`
- 2. `docker build -t detections_api:latest . -f Dockerfile`
- 3. `docker run -d -p 5000:5000 detections_api:latest`
- 4. Check if everyting is ok by running `docker ps` to see if your container is running at port `5000`
- 5. Have fun!!!

### Not a docker user?

- 1. In the projject root folder `cd api`
- 2. Create a new python virtual env `python3.6 -m venv env`
- 3. Start your environment `source env/bin/activate`
- 4. Install dependencies `pip install -r requirements.txt`
- 5. Run the app `python src/app.py`
- 6. Have fun!!!

## Front-end

To build the frontend of the application I have used [ReactJS](https://es.reactjs.org/) as framework and [Antd](https://ant.design/) as styling framework.

For the project structure I have followed the concept of atomic design, you can learn more about atomic design [here](http://bradfrost.com/blog/post/atomic-web-design/)

### How to run?

The application has been configured using [paceljs](https://parceljs.org/) and uses `yarn` as package manager, anyway you can use `npm`

To run:

- 1. From the project root `cd client`
- 2. Install dependencies `yarn install` or `npm install`
- 4. Add new `.env` file with the following: `API_ENDPOINT=http://localhost:5000/detections` or rename the `.env-example` file to `.env`
- 4. Run the app `npm start`
- 5. Once the is built, go to `http://localhost:1234`
- 6. Have fun!!!

### How to test

In order to test the components I have implemented `jest` and `enzyme`.

- 1. Run tests `npm test`

### ToDo

- 1. Add test cases to increase test coverage
