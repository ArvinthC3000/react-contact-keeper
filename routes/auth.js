const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult, check } = require('express-validator');
const auth = require('../middleware/auth');
const config = require('config');

const secret = config.get('jwtSecret');

const User = require('../models/User');

const newUservalidationRequirement = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please is required').exists(),
];

// Routes

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', newUservalidationRequirement, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(404).json({ msg: 'EmailID not found' });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ msg: 'Invalid credential' });

    const payload = {
      user: { id: user.id },
    };

    jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
