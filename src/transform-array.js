const { NotImplementedError } = require('../extensions/index.js');

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
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resultArr = [];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-prev":
        if (i > 0 && arr[i - 2] !== "--discard-next") {
          resultArr.push(arr[i - 1]);
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          resultArr.push(arr[i + 1]);
        }
        break;
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (resultArr.length > 0 && arr[i - 2] !== "--discard-next") {
          resultArr.pop();
        }
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  }
  return resultArr;
}

module.exports = {
  transform
};
