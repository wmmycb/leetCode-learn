/**
* @param {string} s
* @return {number}
*/
// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) return s.length;
//   let max = 1;
//   let start = 0;
//   let map = new Map();
//   while(start + max < s.length) {
//     let len = 1;
//     map.set(s[start], s[start]);
//     while (!map.has(s[len + start]) && len < s.length - start) {
//       map.set(s[len + start], s[len + start]);
//       len++;
//     }
//     max = max > len ? max : len;
//     start++;
//     map.clear()
//   }
//   return max;
// };

// var lengthOfLongestSubstring = function(s) {
//   if (!s.length) return 0

//   const map = new Map()
//   let maxLen = 1
//   let start = 0
//   let len = 0

//   while (start + len < s.length) { // 控制子串的起点
//       let dup
//       console.log(start, len)
//       for (len; start + len < s.length && !map.has(s[start + len]); len++) {
//         map.set(s[start + len], start + len) // 找到子串的终点, 并记录下各字符的位置
//       } 
//       maxLen = len > maxLen ? len : maxLen// 赋值最大长度

//       dup = s[start + len] // 重复的字符
//       let diff = (map.get(dup) || 0) - start + 1 // start后移的距离
      
//       for (let [key] of map) { // 删除前面的dup及其之前的所有值
//           map.delete(key)
//           if (key === dup) break
//       }

//       start += diff // 移动子串起点
//       len -= diff
//   }
//   return maxLen

// };

var lengthOfLongestSubstring = function(s) {
  const n = s.length
  if (n <= 1) return n

  let left = 0, right = 0   //双指针之间的为无重复子串
  const win = new Map()     //键为字符，值为下标
  let res = 0     //记录最长值

  while (right < n) {
    // console.log(left)
      //判断map中是否有当前字符
      const isHave = win.has(s[right]) ? win.get(s[right]) : -1
      console.log(isHave, s[right])

      if(isHave == -1 || isHave < left) {   //如果没有 或者 有但不在窗口内
          win.set(s[right], right)    //扩大窗口
          res = Math.max(res, right - left + 1)
          right++
      }else {
          left = isHave + 1   //说明有重复，则移动左指针到重复的字符右边，保证窗口内无重复字符
      }
  }
  return res
};

console.log(lengthOfLongestSubstring('abcabcbb'));