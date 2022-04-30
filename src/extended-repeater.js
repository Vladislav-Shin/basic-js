const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(
  str,
  {
    separator = "+",
    additionSeparator = "|",
    repeatTimes = 1,
    additionRepeatTimes = 1,
    addition,
  } = options
) {
  str = String(str);
  addition = String(addition);
  let res = [];
  let subres = [];
  for (let i = 0; i < repeatTimes; i++) {
    res.push(str);
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (addition !== "undefined") {
      subres.push(addition);
    } 
  }

  subres = subres.join(additionSeparator);
  res = res.map((item) => item + subres);

  return res.join(separator);
}

module.exports = {
  repeater
};
