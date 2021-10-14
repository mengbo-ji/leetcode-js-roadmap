
// 模拟loadsh中的flowRight
const flowRight = require('lodash').flowRight;

const reverse = arr => arr.reverse();
const first = arr => arr[0];
const toUpper = s => s.toUpperCase();

// function compose(...args) {
//   return value => {
//     return args.reduceRight((prev, next) => next(prev), value);
//   };
// }

const compose = (...args) => value => args.reduceRight((prev, next) => next(prev), value);

const f = compose(toUpper, first, reverse);
// const f = flowRight(toUpper, first, reverse);

const res = f([ 'one', 'two', 'three' ]);
console.log('res', res);
