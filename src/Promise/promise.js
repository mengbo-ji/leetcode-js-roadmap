
class MyPromise {
  constructor(exector) {
    try {
      exector(this.resolve, this.resolve);
    } catch (error) {
      this.reject(error);
    }
  }
  status = 'pending'
  value = undefined;
  reason = undefined;
  resolve = value => {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = value;
    }
  }
  reject = reason => {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.reason = reason;
    }
  }
  then = (successCallback, failCallback) => {
    if (this.status === 'fulfilled') {
      successCallback(this.value);
    } else if (this.status === 'rejected') {
      failCallback(this.reason);
    }
  }
}

const x = new MyPromise((resolve, reject) => {
  resolve(1);
});

x.then(value => {
  console.log(value);
});
