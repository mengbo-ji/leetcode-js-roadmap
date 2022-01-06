/* eslint-disable */
global.a = 1;
const obj = { a: 2 };
const fn = function(b,c) { console.log(this.a, b, c); return 1 }
fn(1, 2)
fn.call(obj, 1, 2)

Function.prototype._call = function(base, ...args) {
  base = base || global;
  base.fn = this;
  const ret = base.fn(...args);
  delete base.fn;
  return ret;
}

fn._call(obj, 1, 2)


Function.prototype._call1 = function(base, ...args) {
  base = base || global;
  base.fn = this;
  const ret = base.fn(...args);
  delete base.fn;
  return ret;
}

fn._call1(obj, 1, 2)