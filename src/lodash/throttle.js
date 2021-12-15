function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const nowTime = +new Date();
    if (nowTime - lastTime > delay) {
      fn(args);
      lastTime = nowTime;
    }
  };
}

function throttle1(fn, delay) {
  let prevTime = 0;
  return (...args) => {
    const nowTime = +new Date();
    if (nowTime - prevTime > delay) {
      fn(...args);
      prevTime = nowTime;
    }
  };
}
