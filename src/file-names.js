const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [];
  const arrObj = {};
  for (const elem of names) {
    if (elem in arrObj) {
      let suffix = arrObj[elem];
      let newName = `${elem}(${suffix})`;

      while (newName in arrObj) {
        suffix++;
        newName = `${elem}(${suffix})`;
      }

      arrObj[newName] = 1;
      arrObj[elem] = suffix + 1;
      newArr.push(newName);
    } else {
      arrObj[elem] = 1;
      newArr.push(elem);
    }
  }
  return newArr;
}

module.exports = {
  renameFiles,
};
