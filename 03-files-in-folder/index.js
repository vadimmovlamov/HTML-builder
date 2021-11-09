const path = require("path");
const fs = require('fs');

fs.readdir('03-files-in-folder/secret-folder', (err, data) => {
    console.log(data);
    data.forEach(file => {
        console.log(file + '\t-\t' + path.extname(file) + '\t-\t' + fs.statSync('03-files-in-folder/secret-folder/' + file).size + "b");
        /*console.log(fs.statSync('03-files-in-folder/secret-folder/' +file).size); //вывод размера
        console.log(file)//тип + имя
        console.log(path.extname(file)); //тип 
        */
    });
});

fs.stat('03-files-in-folder/secret-folder/data.csv', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stats.isFile() + " - this file isn File");
})