
// 计算函数，收集到所有函数的参数之后, 计算结果并返回
const compute = (...args) => {
  return args.reduce((prev, next) => prev + next);
};

const currying = fn => {
  // 利用闭包，将计算函数fn和参数数组args先保存下来，fn = compute, args 是所有函数传入进来的参数数组
  let args = [];
  return function temp(...newArgs) {
    // 如果参数存在 说明还要继续去添加到args中
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs,
      ];
      // 将当前函数继续return 出去 继续去收集参数
      return temp;
    }
    // 如果参数不存在 说明 到了调用的时候()
    // 那么这个时候只需要将收集到参数数组 args 传入到计算函数并且将计算的值返回
    const res = fn.apply(this, args);
    args = []; // 将args重置为空
    return res;
  };
};

const fnCurry = currying(compute);

// 测试下
console.log(fnCurry(1)(2)(3)(4)(5)());
console.log(fnCurry(1, 2, 3)(4)(5)());


// 计算函数
const complute = (...args) => {
  return args.reduce((prev, next) => prev + next, 0);
};


const currying1 = fn => {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs,
      ];
      return temp;
    }
    const res = fn.apply(this, args);
    args = [];
    return res;
  };
};

const fnCurry1 = currying1(complute);

// 测试下
console.log(fnCurry1(1)(2)(3)(4)(5)());
console.log(fnCurry1(1, 2, 3)(4)(5)());
