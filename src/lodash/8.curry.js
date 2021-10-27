
// 模拟lodash中的curry方法
// const curry = require('lodash').curry;

function getSum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function temp(...args) {
    if (args.length < fn.length) {
      return function() {
        return temp(...args, ...arguments);
      };
    }
    return fn(...args);
  };
}

const curried = curry(getSum);

// console.log(curried(1, 2, 3));
// console.log(curried(1)(2)(3));
// console.log(curried(1)(2, 3));


function curry1(fn) {
  return function temp(...args) {
    if (args.length < fn.length) {
      return function() {
        return temp(...args, ...arguments);
      };
    }
    return fn(...args);
  };
}

const curried1 = curry1(getSum);


console.log(curried1(1, 2, 3));
console.log(curried1(1)(2)(3));
console.log(curried1(1)(2, 3));
