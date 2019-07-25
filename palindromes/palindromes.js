const palindromes = function(string) {

    let alphaNumString = string.toLowerCase().replace(/[\W]/g, '')
    let reversed = alphaNumString.split('').reverse().join('')

    return alphaNumString === reversed
}

module.exports = palindromes
