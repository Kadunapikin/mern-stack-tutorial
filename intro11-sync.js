//FS (file system)
//Accessing files to read their content
// console.log('start')

const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//Writting contents ina file
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)
// console.log('Done with this task')
// console.log('Starting the next task')