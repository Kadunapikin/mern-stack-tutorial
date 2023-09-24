//Streams
//-writeable; use to write data sequentially
//-readable; use to read data sequentially
//-Duplex; use to both read and write
//-Transform; to modify data while reading
//They both extent the emitter class

//lets try to create a very big file
// const { error } = require('console');
// const {writeFileSync} = require('fs');
// for(let i = 0; i < 100; i++) {
//     writeFileSync('./content/big-text.txt', `Hello world ${i}\n`, {flag: 'a'})
// }

//To read the file
const {createReadStream} = require('fs');
const stream = createReadStream('./content/big-text.txt', {
    highWaterMark: 90000,
    encoding: 'utf8',
})

stream.on('data', (result) => {
    console.log(result);
})
// stream.on((error) => console.log(error));