//We are exporting an object from another file and consuming it in this file
//file1 -> has the obj called obj1 and we are exporting it and importing the object in this file2 and using it

const expObj = require('./file1.js');

console.log(expObj);
console.log(expObj.name + " " + expObj.age);
console.log(`Hello this is ${expObj.name} and my age is ${expObj.age} and I'm a ${expObj.designation}`);