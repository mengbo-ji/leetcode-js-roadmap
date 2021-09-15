// 把一个字符串中的首字母提取并转换成大写，使用. 作为分隔符
// world wild web --> W. W. W.

const fp = require('lodash/fp');


// const f = fp.flowRight(fp.join('. '), fp.map(fp.toUpper), fp.map(fp.first), fp.split(' '));
const f = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.toUpper, fp.first)), fp.split(' '));

console.log(f('world wild web'));
