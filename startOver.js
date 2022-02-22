const fs = require('fs')

if (fs.existsSync('./dist/sample.html')) {
    fs.unlinkSync('./dist/sample.html');
}