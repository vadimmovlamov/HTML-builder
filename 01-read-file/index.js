/* let fs = require('fs');
let fileContent = fs.readFileSync('./01-read-file/text.txt', 'utf-8');
console.log(fileContent); */

let fs = require("fs");
let fileContent = '';
let readerStream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');

readerStream.on('data', function (reading) {
    fileContent += reading;
});

readerStream.on('end', function () {
    console.log(fileContent);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});