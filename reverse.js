/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let str = Math.abs(x).toString();
  let s = '';
  let num
  for (let i = str.length; i > 0; i--) {
    s+=str[i - 1]
  }
  if (x >= 0) {
    num = Number(s);
  } else {
    num = Number('-' + s)
  }
  if (num > 2**31 -1 || num < (-2)**31) {
    num = 0
  }
  return num
};

// reverse(123)
reverse(-123)