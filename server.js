const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');  // Assumes you have a routes directory with an index.js file

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(`mongodb://localhost:27017/soshall`, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
