/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let sI = pI = 0;
  let match = true;
  // while (sI < s.length && pI < p.length && match) {
  //   let pN = p[pI];
  //   const sN = s[sI];
  //   if (pN === '*') {
  //     pN = p[pI - 1]
  //     pI--;
  //   }
  //   if (pN === '.' || pN === sN) {
  //     sI++;
  //     pI++;
  //   } else if (pI !== p.length - 1) {
  //     pI+=2;
  //   } else {
  //     match = false;
  //   }
  // }
  // if (sI !== s.length) {
  //   match = false
  // } else if (p[pI] === '*') {
  //   if (pI !== p.length - 1) {
  //     if (p[pI + 1] !== s[sI-1]) {
  //       match = false
  //     }
  //   }
  // } else if(pI !== p.length) {
  //   match = false
  // }
  return match
};

// console.log(isMatch('aa', 'a'))
// console.log(isMatch('aa', 'a*'))
// console.log(isMatch('abcd', '.*'))
// console.log(isMatch("aab","c*a*b"))
// console.log(isMatch("mississippi", "mis*is*ip*."))
// console.log(isMatch("ab", ".*c")) // false
// console.log(isMatch('aaa', 'aaaa')) // false
// console.log(isMatch('aaa', 'a*a')) // true
console.log(isMatch("aaa", "ab*a*c*a"))