const ioClient = require('socket.io-client');

// URL of the remote Socket.IO server (replace with the actual server address)
const REMOTE_SERVER_URL = 'http://localhost:3000';

// Initialize the client
const socketClient = ioClient(REMOTE_SERVER_URL);

// Connect to the remote server
socketClient.on('connect', () => {
  console.log('Connected to remote Socket.IO server:', REMOTE_SERVER_URL);

  // Send a message to the server
  socketClient.emit('message', 'Hello from Socket.IO Client');

  // Listen for messages from the server
  socketClient.on('response', (data) => {
    console.log('Message from remote server:', data);
  });
});

// Handle connection error
socketClient.on('connect_error', (error) => {
  console.error('Connection Error:', error.message);
});

// Handle disconnection
socketClient.on('disconnect', () => {
  console.log('Disconnected from remote server');
});
