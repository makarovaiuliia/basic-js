const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== "[object Date]"
  ) {
    return "Invalid date!";
  }

  if (isNaN(date.getTime())) {
    return "Invalid date!";
  }
  const SEASONS = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10],
  };
  const g = date.getUTCMonth();
  const result = Object.keys(SEASONS).find((key) => SEASONS[key].includes(g));

  if (!result) {
    return "Invalid date!";
  }

  return result;
}

module.exports = {
  getSeason,
};
