// server.js
const express = require('express');
const app = express();

// Get the port from the environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

