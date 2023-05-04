// Required packages/modules to run properly
// const path = require('path'); May not need here now that I am making modular routes
const apiRouter = require('express').Router();
const dbNotes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// Creating a route for the api/notes pathway to read the db.json file and add it to the notes page when viewed
apiRouter.get('/notes', (req, res) => res.json(dbNotes));

// Creating a POST request for the /api/notes pathway
apiRouter.post('/notes', (req, res) => {
    let response;
    // Check if there is anything in the request body
    if (req.body && req.body.title) {
        // If there is no id property, give it one with the uuid package function
        if (!req.body.id) {
            req.body.id = uuidv4();
        };
        // If all true, do the following
        response = {
        status: 'success',
        data: req.body,
        };
        res.json(response.data.title + ` has been added!`);
        console.info(response.data.title + ` has been added!`);
    } 
    // If above is false, do the following
    else {
        res.json('Request body must at least contain a title');
    }
});

// Allows these pathways to be imported by main server.js
module.exports = apiRouter;