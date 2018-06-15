// require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

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

// Passport Initialize
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

// Server static assets if in production 
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Run Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
