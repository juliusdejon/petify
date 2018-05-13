require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');

const app = express();


// Body Parser MiddleWare
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database Configuration
const db = require('./config/keys').mongoURI;


// Connect to DB
mongoose
  .connect(db)
  .then(() => console.log('Monggo Db Connected'))
  .catch(() => console.log('MongoDb Failed to Connect'));

// Use Routes
app.use('/api/users', users);


// Run Server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening to port ${port}`));
