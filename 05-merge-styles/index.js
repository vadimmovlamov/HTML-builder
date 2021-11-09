const path = require("path");
const fs = require('fs');
const fase = path.join(__dirname, 'styles');

fs.readdir('05-merge-styles/styles', err => {
            if (err) {
                console.error(err);
            } else {
                console.log('File was finished successful');
            });