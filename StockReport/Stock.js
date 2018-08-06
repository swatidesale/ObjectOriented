module.exports = class Stock {
    constructor(stockNames,noofShares,sharePrice) {
        this.stockNames = stockNames;
        this.noofShares = noofShares;
        this.sharePrice = sharePrice;
    }

    setStockNames(stockNames) {
        this.stockNames = stockNames;
    }

    setNumberofShares(noofShares) {
        this.noofShares = noofShares;
    }

    setSharePrice(sharePrice) {
        this.sharePrice = sharePrice;
    }
    getStockNames() {
        return this.stockNames;
    }

    getNumberofShares() {
        return this.noofShares;
    }

    getSharePrice() {
        return this.sharePrice;
    }
}