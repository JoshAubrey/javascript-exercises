const fibonacci = function(index) {
    //1, 1, 2, 3, 5, 8, etc.

    index = parseInt(index, 10)
    if (index < 0) return 'OOPS'

    let num1 = 1
    let num2 = 1
    let sum = 2

    if (index <=2) return 1

    for (let i=3; i <= index; i++) {
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }

    return sum

}

// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };

module.exports = fibonacci
