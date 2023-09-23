const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
  
io.on('connection', (socket) => {
    socket.on('change background', (color) => {
        io.emit('change background', color);
    });
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});