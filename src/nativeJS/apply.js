/* eslint-disable */
global.a = 1;
const obj = { a: 2 };
const fn = function(b, c) { console.log(this.a, b, c); return 1; };
fn(1, 2);
fn.apply(obj, [ 1, 2 ]);

Function.prototype._apply = function(base, args) {
  base = base || global;
  base.fn = this;
  const ret = base.fn(...args);
  delete base.fn;
  return ret;
};

fn._apply(obj, [ 1, 2 ]);
