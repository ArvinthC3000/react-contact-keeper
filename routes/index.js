const express = require('express');

const router = express.Router();

// Routes
router.use('/users', require('./users'));
router.use('/auth', require('./auth'));
router.use('/contacts', require('./contacts'));

module.exports = router;
