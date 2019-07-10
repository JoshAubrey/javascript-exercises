const repeatString = function(string, amount) {
    let result = ""

    if (amount < 0) {
        return 'ERROR'
    }

    for (i=0; i<amount; i++) {
        result +=string
    }

    return result
}

module.exports = repeatString
