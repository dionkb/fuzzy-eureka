// Required packages/modules to run properly
const path = require('path');
const htmlRouter = require('express').Router();

// Creating Express routes for index (landing page) and notes html pages *** REMEMBER: The order of these matters!
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Allows these pathways to be imported by main server.js
module.exports = htmlRouter;