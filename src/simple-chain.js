const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // возвращает текущую длину цепочки в виде числа;
  },
  addLink(value = "") {
    this.chain.push(`( ${value} )`);
    return this;
    // добавляет ссылку, содержащую stringп редставление в value цепочку;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position <= 0) || position > this.getLength()) {
      this.chain = []
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
    // убирает звено цепи в указанном положении;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // переворачивает цепь;
  },
  finishChain() {
    let finishChain = this.chain
    this.chain = []
    return finishChain.join("~~");
    // заканчивается цепочка и returns она.
  },
};

module.exports = {
  chainMaker,
};
