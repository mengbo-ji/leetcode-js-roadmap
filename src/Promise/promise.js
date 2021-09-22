// 模拟实现 Promise
function Bromise(callback) {
  let _onResolve = null;
  // let _onReject = null;

  this.then = function(onResolve, onReject) {
    _onResolve = onResolve;
  };

  function resolve(value) {
    setTimeout(() => { _onResolve(value); }, 0);
  }

  callback(resolve, null);
}


function callback(resolve, reject) {
  resolve(100);
}
// 将Promise改成我们自己的Bromsie
const demo = new Bromise(callback);

function onResolve(value) {
  console.log(value);
}
demo.then(onResolve);
