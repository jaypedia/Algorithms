// May 17, 2022
// https://leetcode.com/problems/min-stack/

var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (val < this.min) {
    this.min = val;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const cur = this.stack.pop();
  if (cur === this.min) {
    this.min = Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Other's solution
var MinStack = function () {
  this.elements = [];
};

MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

MinStack.prototype.pop = function () {
  this.elements.pop();
};

MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};

MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};
