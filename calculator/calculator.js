function add (num1, num2) {
	return result = num1 + num2
}

function subtract (num1, num2) {
	return result = num1 - num2
}

function sum (array) {
	return result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

function multiply (array) {
	return result = array.length ?
					array.reduce((accumulator, currentValue) => accumulator * currentValue) 
					: 0
}

function power(base, exp) {
	return Math.pow(base, exp)
}

function factorial(num) {
	return (!(num <= 1)) ?
			num * factorial(num - 1)
			: 1
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}