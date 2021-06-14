const express = require('express');

const router = express.Router();

// Routes

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Registered a user');
});

module.exports = router;
