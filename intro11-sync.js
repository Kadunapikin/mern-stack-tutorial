//FS (file system)
//Accessing files to read their content

const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//Writting contents ina file
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)