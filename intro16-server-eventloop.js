//First Example

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Request Event');
//     res.end('Hello World');
// })

// server.listen(5000, () => {
//     console.log('The server is listening on port : 5000......');
// })

//second example

//Synchonous setting up of codes and why its not good
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the landing page')
    }
    if (req.url === '/about') {
        //After seeing that everything is working well, lets add some blocking code to show why it can waste all users time and not just the one making the request
        //This make both the user on home page and the one on about page stay longer to get a response
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                console.log(`${i} and ${j}`);
            }
        }
        res.end('This is the about page')
    }
    res.end('This is an errpr page')
})

server.listen(5000, () => {
    console.log('The server is listening on port : 5000......');
})