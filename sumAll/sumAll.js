const sumAll = function(min, max) {
let sum = 0

if (typeof min != "number" || typeof max != "number") {
    return 'ERROR'
}

if (min < 0 || max < 0) {
    return 'ERROR'
}

if (max < min) {
    const maxtemp = min
    min = max
    max = maxtemp
}

for (let i=min; i<=max; i++) {
    sum += i
}

return sum

}

module.exports = sumAll
