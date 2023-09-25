//first example
const { readFileSync } = require('fs');
const http = require('http');
const homePage = readFileSync('./content/index.html');

const server = http.createServer((req,res)=>{
    //console.log(req.method)

    const url = req.url;
    //home page
    if(url === '/') {
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(homePage)
        res.end();
    }
    //about page
    else if(url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write('<h1>About Page</h1>')
        res.end();
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html'});
        res.write('<h1>Page Not Found</h1>')
        res.end();
    }


})
server.listen(3000)