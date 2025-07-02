/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true
  x = x.toString().split('');
  let leftArr = [];
  let rightArr = [];
  // 奇数
  if (x.length % 2) {
    leftArr = x.slice(0, parseInt(x.length / 2))
    rightArr = x.slice(parseInt(x.length / 2) + 1)
  } else {
    // 偶数
    leftArr = x.slice(0, parseInt(x.length / 2))
    rightArr = x.slice(parseInt(x.length / 2))
  }

  let is = true;
  for (let i = 0; i < leftArr.length; i++) {
    if (leftArr[i] !== rightArr[rightArr.length - i - 1]) {
      return is = false
    }
  }

  return is
};

// console.log(isPalindrome(1221))
// console.log(isPalindrome(121))
console.log(isPalindrome(10))