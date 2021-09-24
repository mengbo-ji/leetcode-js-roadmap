const PENDIND = 'pending'; // 进行中
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected'; // 失败

class MyPromise {
  constructor(exector) {
    exector(this.resolve, this.reject);
  }
  status = PENDIND
  value = undefined
  reason = undefined
  successCallback = []
  failCallback = []
  resolve = value => {
    if (this.status !== PENDIND) return;
    this.status = FULFILLED;
    this.value = value;
    // this.successCallback && this.successCallback(this.value);
    while (this.successCallback.length) this.successCallback.shift()(this.value);
  }
  reject = reason => {
    if (this.status !== PENDIND) return;
    this.status = REJECTED;
    this.reason = reason;
    // this.failCallback && this.failCallback(this.reason);
    while (this.failCallback.length) this.failCallback.shift()(this.reason);
  }
  then(successCallback, failCallback) {
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 异步 获取promise2
        setTimeout(() => {
          const x = successCallback(this.value);
          // 将上一个then的返回值传递给下一个then的回调
          // 判断x是普通值还是promise实例
          // 如果是普通值直接调用resolve返回
          // 如果是promise实例 我们要拿到promise实例的值 传递给下一个then
          resolvePromise(promise2, x, resolve, reject);
        }, 0);
      } else if (this.status === REJECTED) {
        failCallback(this.reason);
      } else {
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    });
    // 实现链式调用
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 判断是否在then中返回了同一个 promise 实例
  if (promise2 === x) {
    return reject(new TypeError('then方法不能自己返回自己'));
  }
  if (x instanceof MyPromise) {
    // x.then(value => resolve(value), reason => reject(reason));
    x.then(resolve, reject);
  } else {
    // 普通值
    resolve(x);
  }
}

function other() {
  return new MyPromise((resolve, reject) => {
    resolve('ohter');
  });
}

const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve('成功');
  // }, 2000);
  resolve('成功');
  // reject('失败');
});

const p1 = promise.then(value => {
  console.log('value1', value);
  // return other();
  return p1;
}, error => {
  console.log(error);
});

p1.then(value => {
  console.log('value2', value);
}, error => {
  console.log('error', error.message);
});

