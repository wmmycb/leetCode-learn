/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  s = s.trim();
  let f = -1;
  if (s[0] === '-') {
    s = s.slice(1);
    f = 0;
  } else if (s[0] === '+') {
    s = s.slice(1)
  }
  const number = new Map([
    ['0', 0],
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
  ])
  let str = ''
  while (number.has(s[0])) {
    if (s[0] !== '0' || str !=='') {
      str += s[0]
    }
    s = s.slice(1)
  }
  if (str === '') return 0;
  if (str < 2**31 + f) return f ? str : -str;
  return f ? 2**31 - 1 : (-2)**31
};

// console.log(myAtoi('4193 with words'))
console.log(myAtoi('   -42'))
// console.log(myAtoi("21474836460"))
console.log(myAtoi("   +0 123"), 0)