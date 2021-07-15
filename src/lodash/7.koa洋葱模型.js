
const middleware = [];

middleware.push(async (ctx, next) => {
  console.log('第一个中间件前');
  next();
  console.log('第一个中间件后');
});

middleware.push(async (ctx, next) => {
  console.log('第二个中间件前');
  next();
  console.log('第二个中间件后');
});

middleware.push(async (ctx, next) => {
  console.log('第三个中间件前');
  next();
  console.log('第三个中间件后');
});

middleware.push(async (ctx, next) => {
  console.log('第四个中间件前');
  next();
  console.log('第四个中间件后');
});

const ctx = {};

compose1(middleware)(ctx);

function compose(middleware) {
  return function(context) {
    // 从第一个中间件 调起
    dispatch(0);

    /**
     * 调用指定 index 的中间件，为其传入 next 参数为下一个中间件的 dispatch
     * @param {Number} i 中间件索引
     * @return {Promise} resolve 后意味着上一个中间件 next() 后的代码可以继续执行
    */
    function dispatch(i) {
      const fn = middleware[i];
      if (i === middleware.length) {
        return Promise.resolve();
      }
      try {
        // 当程序执行到await next 进入下一个中间件的调用
        // 当调用当前中间件，next参数设置为下一个中间件的dispatch
        const ret = fn(context, dispatch.bind(null, i + 1));
        // 将本次调用的结果返还给上一个 中间件 也就是 await next()
        return Promise.resolve(ret);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
}

function compose1(middleware) {
  return function(context) {
    // 默认从第一个开始
    dispatch(0);
    /**
     * 调用对应 索引的中间件，为其传入 next，参数作为下一次的dispatch
     * @param {Number} i 中间件索引
     * @return {Promise} resolve后 上一个中间件的next() 之后的代码可以执行
    */
    function dispatch(i) {
      const fn = middleware[i];
      // 根据索引 取到对应的中间件函数
      if (i === middleware.length) {
        return Promise.resolve();
      }
      try {
        // 调用当前中间件，并把下一次中间件的调用 函数传给 next函数
        const ret = fn(context, dispatch.bind(null, i + 1));
        // 将本次调用的结果返还给上一个 中间件 也就是 await next()
        return Promise.resolve(ret);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
}
