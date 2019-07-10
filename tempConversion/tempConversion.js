const ftoc = function(fahrenheit) {

  let celsius = (fahrenheit-32) * (5/9)

  //round to one decimal place
  celsius = Math.round(celsius * 10) / 10

  return celsius
}

const ctof = function(celsius) {

  let fahrenheit = celsius * (9/5) + 32

  //round to one decimal place
  fahrenheit = Math.round(fahrenheit * 10) / 10

  return fahrenheit
}

module.exports = {
  ftoc,
  ctof
}
