const express = require('express');
const router = express.Router();

// Load Input Validation
const validateRegisterInput = require('../validation/register');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   GET api/users/users
// @desc    Get users
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   POST api/users/users
// @desc    Register users
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  else {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    newUser
      .save()
      .then(user => res.json(user))
      .catch(err => console.log(err));
  }
});

module.exports = router;
