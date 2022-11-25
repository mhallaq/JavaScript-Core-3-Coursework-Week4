// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const numbersArray = numbers.filter((num) => typeof num === "number");
  let total = numbersArray.reduce((a, c) => a + c, 0);
  let result = total / onlyNumbers.length;

  return result;
}

module.exports = average;
