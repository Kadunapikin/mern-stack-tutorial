//Another way to write this async functions without the brackets
const { readFile, writeFile } =require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-async-promise.txt', 'This is the best way to write text files')
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error)
    }
}
start();