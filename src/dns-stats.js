const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (domains) => {
  return domains.reduce((acc, cur) => {
    cur
      .split(".")
      .reverse()
      .map((elem) => `.${elem}`)
      .forEach((_, i, arr) => {
        const item = arr.slice(0, i + 1).join("");
        if (acc[item]) acc[item] += 1;
        else acc[item] = 1;
      });

    return acc;
  }, {});
};

module.exports = {
  getDNSStats,
};
