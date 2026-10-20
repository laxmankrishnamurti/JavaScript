const ticker = {
    tickerName: "Reliance Industries",
    tickerCurrentPrice: "5367",
    tickerLastTradedPrice: "5425",
}

//console.log(ticker);
//console.log(ticker["tickerName"]);

const {tickerLastTradedPrice: LTP} = ticker;
console.log(`tickerLastTradedPrice: ${LTP}`)