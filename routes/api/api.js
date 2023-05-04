// Required packages/modules to run properly
// const path = require('path'); May not need here now that I am making modular routes
const apiData = require('express').Router();
const dbNotes = require('../../db/db.json');

// Creating a route for the api/notes pathway to read the db.json file
apiData.get('/api/notes', (req, res) => res.json(dbNotes));

// Creating a POST request for the /api/notes pathway
// apiData.post('/api/notes', (req, res) => {
//     // Let the client know that their POST request was received
//     res.json(`${req.method} request received`);
//     // Log our request to the terminal
//     console.info(`${req.method} request received`);
    // Prepare a response object to send back to the client
    // let response;
    // // Check if there is anything in the response body
    // if (req.body && req.body.title) {
    //     response = {
    //     status: 'success',
    //     data: req.body,
    //     };
    //     res.json(`Info for ${response.body.title} has been added!`);
    // } else {
    //     res.json('Request body must at least contain a title');
    // }
// });

module.exports = apiData;