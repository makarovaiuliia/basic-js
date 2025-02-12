const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let element of arr) {
      if (Array.isArray(element)) {
        let depth = 1 + this.calculateDepth(element);
        maxDepth = Math.max(maxDepth, depth);
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
