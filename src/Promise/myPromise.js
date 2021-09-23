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
  resolve = value => {
    if (this.status !== PENDIND) return;
    this.status = FULFILLED;
    this.value = value;
  }
  reject = reason => {
    if (this.status !== PENDIND) return;
    this.status = REJECTED;
    this.reason = reason;
  }
  then(fulfilledCallback, failCallback) {
    if (this.status === FULFILLED) {
      fulfilledCallback(this.value);
    } else {
      failCallback(this.reason);
    }
  }
}


const promise = new MyPromise((resolve, reject) => {
  reject('失败');
  resolve('成功');
});

promise.then(value => {
  console.log(value);
}, error => {
  console.log(error);
});
