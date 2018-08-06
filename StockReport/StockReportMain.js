/******************************************************************************
 *  
 *  Purpose: Stock Report Implementataion.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   03-08-2018
 *
 ******************************************************************************/
var StockReport = require('./StockReport.js');
var utility = require('./utility.js');
var input = utility.userInput();

let stockReport = new StockReport();

console.log("Stock Reoprt Operations");
console.log("0. Exit");
console.log("1. Add Stock Details");
console.log("2. Display Stock Report");
/*
 * setPrompt() to prompt user for input.
 */ 
input.setPrompt('choice> ');
input.prompt();

input.on('line',function(line) {
    /*
     * if type 0 then close program.
     */
    if(line === '0') {
        input.close();
    }
    /*
     * if type 1 then add stock details.
     */
    else if(line === '1') {
        stockReport.askNumberofStocks(input);
        input.prompt();
    }
    /*
     * if type 2 then read stock report and display.
     */
    else if(line === '2') {
        stockReport.getStockDetails();
        input.prompt();
    }
}).on('close',function() {
    process.exit(0);
});