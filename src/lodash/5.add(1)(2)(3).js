
// 计算函数，等收集到所有函数的参数之后组成数组传入进来
const compute = (...args) => {
  return args.reduce((prev, next) => prev + next);
};

// 利用闭包，将计算函数先保存下来，fn = compute
const currying = fn => {
  // 收集函数的参数
  let args = [];
  // 每次return 一个函数去继续收集下一个函数的参数
  return function temp(...newArgs) {
    // 如果参数存在 说明还要继续去添加到args中
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs,
      ];
      // 继续去收集参数
      return temp;
    }
    // 如果参数不存在 说明 到了调用的时候()
    // 那么这个时候只需要将收集到参数数组args 传入到计算函数并且返回值就好了
    const res = fn.apply(this, args);
    args = []; // 将args重置为空
    return res;
  };
};

const fnCurry = currying(compute);

// 测试下
console.log(fnCurry(1)(2)(3)(4)(5)());
console.log(fnCurry(1, 2, 3)(4)(5)());
