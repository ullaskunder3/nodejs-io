const net = require('net');
const HOSTNAME = "localhost";
const PORT = 6060;

net.createServer((socket) => {
    console.log('Client is connected.');
    socket.on('data', (name) => {
        socket.write(`Hello ${name}!`);
    });
}).listen(PORT, HOSTNAME);