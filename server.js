// Required packages/modules to run properly
const express = require('express');
const path = require('path');
const fs = require('fs');
const dbNotes = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

// Boilerplate Express code below:
// Instantiate Express.js
const app = express();
// Set up a port to allow server to run Express.js
const PORT = 3001;
// Middleware allowing the use of the public folder in shortened code
app.use(express.static('public'));

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creating Express routes for index (landing page) and notes html pages
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// Creating a route for the api/notes pathway to read the db.json file
app.get('/api/notes', (req, res) => res.json(dbNotes));

// Creating a POST request for the /api/notes pathway
app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
    // Prepare a response object to send back to the client
    let response;
    // Show the user agent information in the terminal
    console.info(req.rawHeaders);
    // Log our request to the terminal
    console.info(`${req.method} request received`);
    // Check if there is anything in the response body
    if (req.body && req.body.title) {
        response = {
        status: 'success',
        data: req.body,
        };
        res.json(`Info for ${response.data.title} has been added!`);
    } else {
        res.json('Request body must at least contain a title');
    }
});

// Listen method to 'open' up the specified PORT, to allow communication
app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);

// Allows a unique ID to be generated via 'uuid' NPM package
let uniqueID = uuidv4();
console.log(uniqueID);