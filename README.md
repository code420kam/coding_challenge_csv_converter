# CSV-Converter API

This is node.js Rest API application, where you can make a get request to lastfm where you can search by artists.

## GET STARTED

You can fork this repo and run the following commands at your root directory to install all packages.

`yarn` or `npm install`

For this example we will go on with npm.

### PACKAGES

#### axios
`npm i axios`

#### dotenv
`npm i dotenv`

#### nodemon 
`npm i --save-dev nodemon`

## ENVIRONMENT VARIABLES
Bellow are the environmental variables that needs to be set in a `.env` file. This is the default setting that I used for development, but you can change it to what works for you.
```
ROOTURL=http://ws.audioscrobbler.com/2.0/
PORT=8000
```

## HOW TO RUN

run `npm start` to start the application after you had add `"start": "nodemon src/index.js"` at `scripts` section to your package.json file.
Now you can go on your explorer and open the url `http://localhost:8000`