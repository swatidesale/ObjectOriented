var Stock = require('./Stock.js');
var fs = require('fs');
/*
 * Class to implement Stock Report Operations.
 */ 
module.exports = class StockReport {
    constructor() {
        this.noofStocks;
        this.checkLength=0;
        this.stockDetails=[];
        this.nameStock;
        this.shareNos;
        this.priceShare;
    }
    /*
     * Function to read stock details from stock.json and display.
     */ 
    getStockDetails() {
        var stockData = fs.readFileSync('./stock.json');
        var stockDetails = JSON.parse(stockData);
        var stocks = stockDetails.stock;
        console.log("\n-------------------------------------------------------------------------");
        console.log("                            Stock Report Details                     ");
        console.log("-------------------------------------------------------------------------");
        console.log("Stock Name |\tNumber of Shares |\tShare Price |\tTotal Shares");
        console.log("-------------------------------------------------------------------------");
        stocks.forEach(function(stock) {
            console.log(stock.stockName+"\t\t\t"+stock.noofShares+"\t\t"+stock.sharePrice+"\t\t"+(stock.sharePrice*stock.noofShares));
        });
    }
    /*
     * Function to ask how many number of stock details user want to add.
     * 
     * @param input
     */ 
    askNumberofStocks(input) {
        input.question("Enter number of Stocks : ",(noofStocks) =>  {
            this.noofStocks = noofStocks;
            this.askStockDetails(input);
        });
    }
    /*
     * Function to read stock details from user and save into stock.json file
     * 
     * @param input
     */ 
    askStockDetails(input) {
        if(this.checkLength == this.noofStocks) {
            this.getStockDetails();
        } else {
            input.question("Enter Stock Name : ",(stockName) => {
                input.question("Enter Number of Shares : ",(noofShares) => {
                    input.question("Enter Share Price : ",(sharePrice) => {
                        this.nameStock = stockName;
                        this.shareNos = noofShares;
                        this.priceShare = sharePrice;   

                        let stock = new Stock(this.nameStock,this.shareNos,this.priceShare);
                    
                        var stockData = fs.readFileSync('./stock.json');
                        this.stockDetails = JSON.parse(stockData);
                        
                        this.stockDetails.stock.push({
                            stockName: stock.getStockNames(),
                            noofShares: stock.getNumberofShares(),
                            sharePrice: stock.getSharePrice()
                        });
                
                        this.checkLength++;
                        fs.writeFileSync('./stock.json',JSON.stringify(this.stockDetails,null,2));
                        this.askStockDetails(input);
                    });
                });
            });
        }
    }
}

// var obj = new StockReport();
// obj.askNumberofStocks();