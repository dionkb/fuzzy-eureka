// Required packages/modules to run properly
const express = require('express');

// Instantiate Express.js
const app = express();
// Set up a port to allow server to run
const PORT = process.env.PORT || 3001;

// Required routing files using modular routing
const htmlPath = require('./routes/html')
const apiPath = require('./routes/api');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware allowing the use of the public folder in shortened code
app.use(express.static('public'));

// Using modular routing pathways
app.use('/api', apiPath); // The order that these are in may be important...keep an eye out!
app.use('/', htmlPath);


// Listen method to 'open' up the specified PORT, to allow communication
app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);

// Allows a unique ID to be generated via 'uuid' NPM package
// let uniqueID = uuidv4();
// console.log(uniqueID);