//Node.js Event Loop

console.log('Hello Felicity');

setTimeout(() => {
    console.log('How was your night')
}, 0);

console.log('Where are you currently');
console.log('Take care!');

//second exaample

const {readFile} = require('fs');

console.log('starting my task')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return err
    }
    console.log(result);
    console.log('Done with first task!');
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return err
        }
        console.log(result);
        console.log('Done with second task!');
    })
})
console.log('Completed task!');
console.log('Starting the next one')
