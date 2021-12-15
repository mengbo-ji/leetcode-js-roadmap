function throttle(fn, delay) {
  let timer = null;
  let lastTime = 0;
  return function(...args) {
    const ctx = this;
    const nowTime = +new Date();
    if (nowTime - lastTime < delay) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        lastTime = nowTime;
        fn.apply(ctx, args);
      }, delay);
    } else {
      // 这个时候表示时间到了，必须给响应
      lastTime = nowTime;
      fn.apply(ctx, args);
    }
  };
}

function strongThrottle(fn, delay) {
  let timer = null;
  let prevTime = 0;
  return (...args) => {
    const nowTime = +new Date();
    if (nowTime - prevTime < delay) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    } else {
      fn(...args);
      prevTime = nowTime;
    }
  };
}
