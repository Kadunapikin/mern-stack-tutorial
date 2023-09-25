//Practical example on stream. converting data into chunked data to trasfer
// const {writeFileSync} = require('fs');
// for(let i = 0; i < 1000; i++) {
//     writeFileSync('./content/second-big-text.txt', `Hello world ${i}\n`, {flag: 'a'})
// }

const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
    // To use events with readStream method, lets comment line 12 and 13 out. It will enable us to send data in chunks
    // const text = fs.readFileSync('./content/second-big-text.txt', 'utf8');
    // res.end(text)
    const fileStream = fs.createReadStream('./content/second-big-text.txt', 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000);


