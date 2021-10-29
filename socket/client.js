const net = require('net');
const HOSTNAME = 'localhost';
const PORT = 6060;

const socket = net.connect(PORT, HOSTNAME);

socket.write('I Am Awesome...');
socket.on('data', (data) => {
    console.log(data.toString());
});
