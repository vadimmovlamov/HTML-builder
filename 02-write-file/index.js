let fs = require("fs");
let stream = fs.createWriteStream('./02-write-file/text__two.txt', 'utf8', 'r+');

stream.on('error', (err) => console.log(`Err: ${err}`));
stream.on('finish', () => console.log('finished'));


stream.write('Введите текст прямо тут \n');
stream.end();

process.on("SIGINT", () => {
    console.log('AaAaAaAaAaAa');
    process.exit(0);
});