const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Define routes
router.get('/', blogController.getAllBlogs);
router.get('/:slug', blogController.getBlogBySlug);

module.exports = router;
