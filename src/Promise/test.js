
const MyPromise = require('./myPromise');

function other() {
  return new MyPromise((resolve, reject) => {
    resolve('ohter');
  });
}

// const promise = new MyPromise((resolve, reject) => {
//   // throw new Error('执行器报错捕获');
//   setTimeout(() => {
//     resolve('成功');
//   }, 2000);
//   // resolve('成功');
//   // reject('失败');
// });

// const p1 = promise.then(value => {
//   console.log('value1', value);
//   // return other();
//   // return p1;
//   // throw new Error('then 报错捕获');
//   return 'aaa';
// }, error => {
//   console.log('error1', error);
//   return '10000000';
// });

// p1.then(value => {
//   console.log('value2', value);
// }, error => {
//   console.log('error2', error.message);
// });

// const p2 = new MyPromise((resolve, reject) => {
//   // resolve('成功');
//   reject('失败');
// });

// p2.then().then().then(value => console.log('value3', value));
// p2.then().then().then(value => console.log('value4', value), error => console.log('error4', error));

function p1() {
  return new MyPromise((resolve, reject) => {
    resolve('p1');
  });
}

function p2() {
  return new MyPromise((resolve, reject) => {
    resolve('p2');
  });
}

MyPromise.all([ 'a1', 'b1', p1(), p2(), 'c1', 'd1' ]).then(result => {
  console.log('result', result);
});
