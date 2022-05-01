const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }
  encrypt(string, key) {
    if (!string || !key) throw new Error ('Incorrect arguments!')
    string = string.toUpperCase();
    key = key.toUpperCase();
    let alphonse = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (key.length < string.length) {
      key += key;
    }
    let k = 0;
    string = string.split('')
              .map( letter => alphonse.includes(letter) ? alphonse[(alphonse.indexOf(letter) + alphonse.indexOf(key[k++])) % alphonse.length] : letter)
              .join('');
    return this.type ? string : string.split('').reverse().join('');
  }
  decrypt(string, key) {
    if (!string || !key) throw new Error ('Incorrect arguments!')
    string = string.toUpperCase();
    key = key.toUpperCase();
    let alphonse = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (key.length < string.length) {
      key += key;
    }
    let k = 0;
    string = string.split('')
              .map( letter => alphonse.includes(letter) ? alphonse.substr((alphonse.indexOf(letter) - alphonse.indexOf(key[k++])) % alphonse.length, 1) : letter)
              .join('');
    return this.type ? string : string.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine,
};
