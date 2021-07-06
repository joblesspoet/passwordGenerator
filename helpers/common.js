const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePasswordTofile = (password) => {

    const filePath = 'passwords.txt';

    fs.writeFile(filePath, password + os.EOL, function (err) {
        if (err) 
            return console.log(err);

        console.log(chalk.green('Password saved to into the passwords.txt'))
    });
}

module.exports = savePasswordTofile