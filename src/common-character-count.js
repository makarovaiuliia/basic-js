const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const s2Chars = s2.split("");

  for (let char of s1) {
    let index = s2Chars.indexOf(char);
    if (index !== -1) {
      count++;
      s2Chars.splice(index, 1); // Remove the character from s2Chars to avoid recounting
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
