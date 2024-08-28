const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
app.use(express.json());
const server = http.createServer(app);

// Initialize Socket.IO
const io = socketIo(server);
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
  
    // Listen for events from the client
    socket.on('message', (data) => {
      console.log('Message received from client:', data);
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });

// Export io
module.exports = io;

// Import routes
const messageRoutes = require('./abs');

app.use('/message', messageRoutes);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
