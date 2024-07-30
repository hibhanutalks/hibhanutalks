const blogData = require('../data/blogData');

// Get all blogs
exports.getAllBlogs = (req, res) => {
  res.json(blogData);
};

// Get blog by slug
exports.getBlogBySlug = (req, res) => {
  const blog = blogData.find(b => b.slug === req.params.slug);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};
