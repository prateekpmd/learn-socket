const express = require('express');
const io = require('./server'); // Import io from server.js

const router = express.Router();

router.post('/api', (req, res) => {
  const { message } = req.body;
  
  // Use io to emit the message
  io.emit('message',{name:message,vacany:"dude im here"} );
  
  res.json({ status: 'Message sent' });
});

module.exports = router;
