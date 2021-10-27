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
