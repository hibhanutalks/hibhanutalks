const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const blogRoutes = require('./routes/blogRoutes');
const viewRoutes = require('./routes/viewRoutes');

app.use('/api/blog', blogRoutes);
app.use('/api/views', viewRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
