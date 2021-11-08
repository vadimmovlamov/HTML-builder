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