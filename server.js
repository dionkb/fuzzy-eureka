// Required packages/modules to run properly
const express = require('express');
// const path = require('path'); May not need here now that I am making modular routes
// const fs = require('fs'); May not need here now that I am making modular routes
// const dbNotes = require('./db/db.json'); May not need here now that I am making modular routes
// const { v4: uuidv4 } = require('uuid'); May not need here now that I am making modular routes

// Required routing files using modular routing
const htmlPath = require('./routes/html')
const apiPath = require('./routes/api');

// Boilerplate Express code below:
// Instantiate Express.js
const app = express();
// Set up a port to allow server to run Express.js, with option to run using a
// port set up through Heroku OR 3001 if otherwise unable
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware allowing the use of the public folder in shortened code
app.use(express.static('public'));

// Listen method to 'open' up the specified PORT, to allow communication
app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);

// Allows a unique ID to be generated via 'uuid' NPM package
// let uniqueID = uuidv4();
// console.log(uniqueID);