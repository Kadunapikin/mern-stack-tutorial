const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our amazing website')
    }
    if (req.url === '/about') {
        res.end('Hers some history about us')
    }
    res.end(`
    <h1>Oops!!!</h1>
    <p>Sorry we can't seem to find the page ypu're looking for</p>
    <a href='/'>back home<a/>
    `)
})

server.listen(3000);