let fs = require('fs');
let fileContent = fs.readFileSync('text.txt', 'utf-8');
console.log(fileContent);