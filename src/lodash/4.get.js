function get(source, path, defaultValue) {
  if (typeof source !== 'object' || typeof path !== 'string') {
    return;
  }
  // 正则匹配 [0] 这种情况，
  // $1 就是第一个小括号匹配到的内容，.$! = .0
  // arr[0].a => arr.0.a => [arr, 0, a]
  // [0].a.b => [ '', '0', 'a', 'b' ].filter(Boolean)
  const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(Boolean);
  let res = source;
  for (const p of paths) {
    // 要注意null和undefined 取属性报错
    res = Object(res)[p];
    if (res === undefined) {
      return defaultValue;
    }
  }
  return res;
}

const obj = {
  arr: [
    {
      a: 1,
    },
  ],
  p: {
    c: 'i',
  },
};

// console.log(get(obj, 'arr[0].a', 0)); // output: 1
// console.log(get({ a: null }, 'a.b.c', 2)); // output: 2
// console.log(get({ a: undefined }, 'a', 1)); // output: 1
// console.log(get({ a: null }, 'a', 3)); // output: null
// console.log(get({ a: [{ b: 1 }] }, 'a[0].b', 3)); // output: 1
// console.log(get([{ a: { b: 111 } }], '[0].a.b', 3)); // output: 111

// 不考虑 [] 的情况
const _get = (object, keys, val) => {
  return keys.split(/\./).reduce((prev, next) => ((prev || {})[next]), object) || val;
};

console.log(get({ a: null }, 'a.b.c', 3)); // output: 3
console.log(get({ a: undefined }, 'a', 3)); // output: 3
console.log(get({ a: null }, 'a', 3)); // output: null
console.log(get({ a: { b: 1 } }, 'a.b', 3)); // output: 1
