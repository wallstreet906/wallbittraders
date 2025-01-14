const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to serve static files (like CSS, images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home'); // Render home.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // Render about.ejs
});

app.get('/mission', (req, res) => {
  res.render('mission'); // Render mission.ejs
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Render contact.ejs
});

// Start the server
app.listen(PORT, () => {
  console.log("Server running at http://localhost:${PORT}");
});