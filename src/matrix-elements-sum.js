const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let count = 0;
  let arrLength = matrix[0].length;
  matrix = matrix.flat(Infinity);
  matrix.forEach((item, index) => {
    if ((matrix[index - arrLength] !== 0)) {
      console.log(item);
      count += item
    }
  });
  return count;
}

module.exports = {
  getMatrixElementsSum
};
