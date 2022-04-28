const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr[0] == "--discard-prev") {
    arr.splice(0, 1);
  }
  let newArr = [];
  let res = arr
    .map((item, i) => {
      if (item == "--double-next") {
        return arr[i + 1];
      }
      if (item == "--double-prev") {
        return arr[i - 1];
      }
      if (item == "--discard-next") {
        return (arr[i + 1] = null);
      }
      if (item == "--discard-prev") {
        return item;
      } else {
        return item;
      }
    })
    .filter((item) => {
      if (item !== null) {
        return item;
      }
    });

  for (let i = 0; i < res.length; i++) {
    if (res[i] !== "--discard-prev") {
      newArr.push(res[i]);
    } else {
      if (arr[i - 2] == "--discard-next") {
        newArr.pop();
      }
      if (arr[i - 2] == "--double-next") {
        newArr.pop();
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
