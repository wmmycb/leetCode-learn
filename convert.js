/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let col = 0;
  let add = 1;
  const arr = []
  for(let i = 0; i < s.length; i++) {
    arr[col] = (arr[col] || '') + s[i]
    if (col === numRows - 1 && add > 0) {
      add = -1
    }
    if (col === 0 && add < 0) {
      add = 1
    }
    col = col + add
  }
  return arr.join('');
};

console.log(convert("PAYPALISHIRING", 4))