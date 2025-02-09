// server.js
const express = require('express');
const app = express();

// Get the port from the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Express Server</title>
        </head>
        <body>
            <h1>Welcome to My Express Server!</h1>
            <p>This is a simple HTML page served by Express.</p>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
