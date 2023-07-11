function createQuote(quote, callback) {
    let myQuote = "Like I always say, " + quote;
    callback(myQuote); //2
}

function longQuote(quote) {
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", longQuote); //1