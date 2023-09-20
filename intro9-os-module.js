//Node Js build in modules
//The os module

const os = require('os');

//Info about current user
const user = os.userInfo()
console.log(user)
console.log(`The system run time is ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)