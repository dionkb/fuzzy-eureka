// Required packages/modules to run properly
const path = require('path');
const htmlData = require('express').Router();

// Creating Express routes for index (landing page) and notes html pages
htmlData.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});
htmlData.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

module.exports = htmlData;