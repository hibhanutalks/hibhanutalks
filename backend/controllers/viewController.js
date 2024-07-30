// In a real application, you'd use a database to keep track of view counts
const blogData = require('../data/blogData');

// Increment view count for a blog post
exports.incrementViewCount = (req, res) => {
  const blog = blogData.find(b => b.slug === req.params.slug);
  if (blog) {
    blog.viewCount = (blog.viewCount || 0) + 1;
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};
