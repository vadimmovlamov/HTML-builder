const path = require("path");
const fs = require('fs');
const process = require('process');
const stream = require('stream');

console.log('Введите текст прямо тут -->');

const stream = fs.createWriteStream(path.join(__dirname, '02-write-file/text__two.txt'));
stream.on('error', (err) => console.log(`Err: ${err}`));
stream.on('finish', () => console.log('finished'));
stream.write('Введите текст прямо тут \n');
stream.end();

process.on("SIGINT", () => {
    console.log('AaAaAaAaAaAa');
    process.exit(0);
});