// 实现对象的 iterable接口

// const obj = {
//   store: [ 'foo', 'bar', 'jmb' ],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         const result = {
//           value: self.store[index],
//           done: index >= self.store.length,
//         };
//         index++;
//         return result;
//       },
//     };
//   },
// };

// for (const item of obj) {
//   console.log('item', item);
// }


const todos = {
  life: [ '吃饭', '睡觉', '❤️' ],
  learn: [ '学习', '敲代码', '提升' ],
  work: [ '工作', '开会' ],
  each(callback) {
    const all = [ ...this.life, ...this.learn, ...this.work ];
    for (const item of all) {
      callback(item);
    }
  },
  [Symbol.iterator]() {
    const all = [ ...this.life, ...this.learn, ...this.work ];
    let index = 0;
    return {
      next() {
        const result = {
          value: all[index],
          done: index++ >= all.length,
        };
        return result;
      },
    };
  },
};

// for (const item of todos.life) {
//   console.log(item);
// }

// for (const item of todos.learn) {
//   console.log(item);
// }

// for (const item of todos.work) {
//   console.log(item);
// }

// todos.each(item => {
//   console.log(item);
// });

// for (const item of todos) {
//   console.log(item);
// }


// 2. 采用Generator接口实现iterable接口


const todos1 = {
  life: [ '吃饭', '睡觉', '❤️' ],
  learn: [ '学习', '敲代码', '提升' ],
  work: [ '工作', '开会' ],
  each(callback) {
    const all = [ ...this.life, ...this.learn, ...this.work ];
    for (const item of all) {
      callback(item);
    }
  },
  *[Symbol.iterator]() {
    const all = [ ...this.life, ...this.learn, ...this.work ];
    for (const item of all) {
      yield item;
    }
  },
};


for (const item of todos1) {
  console.log(item, 'item');
}
