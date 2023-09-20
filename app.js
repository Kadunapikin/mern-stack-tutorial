//Modules in node js
//common js, every file is a module
//modules- Ecapsulated code (only share minimum; only what we want to share)

const john = 'john';
const peter = 'peter';

// const sayHi = (name) => {
//     console.log(`Hello there ${name}, how are you doing`);
// }
function sayHi(name) {
    console.log(`Hello there ${name}, how are you doing`);
}

sayHi('susan')
sayHi(john)
sayHi(peter)