// Required packages/modules to run properly
// const path = require('path'); May not need here now that I am making modular routes
const apiRouter = require('express').Router();
const dbNotes = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Creating a route for the api/notes pathway to read the db.json file and add it to the notes page when viewed
apiRouter.get('/notes', (req, res) => res.json(dbNotes));

// Creating a POST request for the /api/notes pathway
apiRouter.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        fs.readFile(`./db/db.json`, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }
            else {
                let savedNotes = JSON.parse(data);
                savedNotes.push(newNote);
                fs.writeFile(`./db/db.json`, JSON.stringify(savedNotes), (err) => {
                    err ? console.error(err) : console.info(`Success!`)
                });
            }
        });
    }
    else {
        console.log("You must include a title and text for the note")
    };
});

// apiRouter.delete('/api/notes/:id', (req, res) => {
//     fs.readFile(`./db/db.json`, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             let savedNotes = JSON.parse(data);
//             // ***** NEED TO FIGURE OUT HOW TO FILTER ******
//             let keptNotes = savedNotes.filter(newNote);
//             fs.writeFile(`./db/db.json`, JSON.stringify(keptNotes), (err) => {
//                 err ? console.error(err) : console.info(`Success!`)
//             });
//         }
//     });
// });

// Allows these pathways to be imported by main server.js
module.exports = apiRouter;