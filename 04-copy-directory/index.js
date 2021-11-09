const path = require("path");
const fs = require('fs');
const files = '04-copy-directory/files';
const files__copy = '04-copy-directory/files-copy';


/* fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => { */
fs.mkdir(files, fileses - copy, {
            recursive: true
        }, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File was finished successful');
            });

        /* fs.copyFile('files', 'fileses-copy', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Copy was finished successful");
            }
        }); */