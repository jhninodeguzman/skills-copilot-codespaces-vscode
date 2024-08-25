// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = 4001;

// Use morgan logging
app.use(morgan('dev'));
// Use body-parser
app.use(bodyParser.json());

// Import comments
const comments = require('./comments');
const { getComments, addComment } = comments;

// Get comments
app.get('/comments', (req, res) => {
  res.json(getComments());
});

// Add comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  addComment(comment);
  res.json(getComments());
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});