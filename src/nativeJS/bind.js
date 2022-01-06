/* eslint-disable */
global.a = 1;
const obj = { a: 2 };
const fn = function(b, c, d, e) { console.log(this.a, b, c, d, e); return 1 }
fn(1, 2)
fn.bind(obj, 1, 2)(3)

Function.prototype._bind = function(base, ...args1) {
  return (...args2) => {
    base = base || global;
    base.fn = this;
    const ret = base.fn(...args1, ...args2);
    delete base.fn;
    return ret
  }
}
fn._bind(obj, 1, 2)(3, 4)

Function.prototype._bind1 = function(base, ...args) {
  return () => {
    base = base || window;
    base.fn = this;
    const ret = base.fn(...args, ...arguments);
    Reflect.deleteProperty(base, 'fn')
    return ret
  }
}