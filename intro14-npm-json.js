//npm can be install locally: When installed locally, it can only be use in the project
//npm i <packageName>

//npm can also be install globally such that it can be used in any project
// npm install -g <packageName>

//package.json: manifest file (it stores important information about project/packages)
//it can be installed in three diff means,
//manuall: create the file nin the root folder and create the properties
//npm init (follow the step by step approach and press enter to skip)
//npm init -y (everything is installed by default)

const one = require('lodash');
const items = [1, [2, [3, [4]]]];

const newItems = one.flattenDeep(items);
console.log(newItems);

