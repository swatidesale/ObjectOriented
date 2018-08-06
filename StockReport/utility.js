var readline = require('readline');
/*
 * Function for user input. 
 */ 
exports.userInput = function() {
    var read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return read;
}