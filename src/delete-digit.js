const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let number = [];
  let newArr = String(Math.trunc(n)).split("");

  for (let i = 0; i < newArr.length; i++) {
    let remove = newArr.splice(i, 1);
    number.push(newArr.join(""));
    newArr.splice(i, 0, remove)
  }

  return Math.max(...number);
}


module.exports = {
  deleteDigit
};
