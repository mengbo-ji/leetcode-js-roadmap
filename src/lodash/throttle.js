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
