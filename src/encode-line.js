const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = "";
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        newString += counter;
      }
      newString += str[i];
      counter = 1;
    }
  }

  return newString;
}

module.exports = {
  encodeLine,
};
