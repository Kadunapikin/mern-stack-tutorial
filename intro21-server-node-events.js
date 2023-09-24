//setting up even emitter for server

//this was our former example for creating server
const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('welcome');
// })

//using Event Emitter API

const server = http.createServer();
//emits request event
//subscribe to it/listen for it/respond to it
server.on('request', (req, res) => {
    res.end('welcome');
})
server.listen(5000);
