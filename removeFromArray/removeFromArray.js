const removeFromArray = function(...arguments) {
    //spread operator used for arguments

    //Create array from the first argument passed, 
    //which is the array the other arguments will be removed from.
    const array = arguments[0]

    //return the array items if they are NOT included in the other arguments.
    return array.filter(item => !arguments.includes(item))

}

module.exports = removeFromArray
