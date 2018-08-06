var readline = require('readline');
/*
 * Function to read value from user
 */ 
exports.userInput = function() {
    var read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return read;
}