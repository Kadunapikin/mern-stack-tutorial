//Path module

const path = require('path');
console.log(path.sep);

const filePath = path.join('/content', 'sub-folder', 'test.text')

console.log(filePath)

//To get the path to the final file in the folder
const base = path.basename(filePath);
console.log(base);