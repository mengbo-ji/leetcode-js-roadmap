const _ = require('lodash');

const arr = [ 0, 1, false, 2, '', 3 ];
console.log(_.compact(arr));

// native
const _arr = arr.filter(Boolean);
console.log(_arr);
