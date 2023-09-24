//on; listen for for specific events
//emit; will emit that event


//First example

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// customEmitter.on('response', () => {
//     console.log('data received');
// })
// //More logic can be aded
// customEmitter.on('response', () => {
//     console.log('another logic');
// })

// customEmitter.emit('response');

//Second example
//we can pass in more arguments in the response

customEmitter.on('response', (name, id) => {
    console.log(`data received was user name; ${name} and id; ${id}`);
})
//More logic can be aded
customEmitter.on('response', () => {
    console.log('another logic');
})

customEmitter.emit('response', 'john', 34);
