/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const max = Math.max(l1.length, l2.length);
  let addN = 0;
  const arr = [];
  for (let i = 0; i < max; i++) {
    const num = (l1[i] || 0) + (l2[i] || 0) + addN;
    arr.push(num % 10);
    addN = parseInt(num / 10);
  }
  if (addN) arr.push(addN)
  return arr
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))