// 防抖
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    const ctx = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(ctx, args);
    }, delay);
  };
}
