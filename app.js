const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    // Pass the streaming URL to the frontend
    const streamUrl = 'https://sonic-ca.instainternet.com/8014/stream';
    res.render('index', { streamUrl });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Music player running at http://localhost:${PORT}`);
});
