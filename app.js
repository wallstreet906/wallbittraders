const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set public folder for static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log("Server running at http://localhost:${PORT}");
});