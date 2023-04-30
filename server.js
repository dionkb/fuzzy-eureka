// Required packages/modules to run properly
const express = require('express');
const path = require('path');
const fs = require('fs');

// Boilerplate Express code below:
// Instantiate Express.js
const app = express();
// Set up a port to allow server to run Express.js
const PORT = 3001;
// Middleware allowing the use of the public folder in shortened code
app.use(express.static('public'));
// Creating Express routes for index (landing page) and notes html pages
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Listen method to 'open' up the specified PORT, to allow communication
app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);