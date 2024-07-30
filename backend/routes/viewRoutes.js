const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

// Define routes
router.post('/increment/:slug', viewController.incrementViewCount);

module.exports = router;
