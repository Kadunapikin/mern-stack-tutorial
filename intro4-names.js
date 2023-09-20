//Modules in node js
//common js, every file is a module
//modules- Ecapsulated code (only share minimum; only what we want to share)

//Local
const secret = "SUPER SECRET";

//Share
const john = 'john';
const peter = 'peter';

module.exports = { john, peter}
