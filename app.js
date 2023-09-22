const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the landing page')
    }
    if (req.url === '/about') {
        res.end('This is the about page')
    }
    res.end('This is an errpr page')
})

server.listen(5000, () => {
    console.log('The server is listening on port : 5000......');
})