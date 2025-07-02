/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const allL = nums1.length + nums2.length;
  let i = parseInt(allL / 2);
  let a = 0;
  let b = 0;
  let arr = [];
  while (arr.length - 1 < i && a < nums1.length && b < nums2.length) {
    if (nums1[a] < nums2[b]) {
      arr.push(nums1[a])
      a++;
    } else {
      arr.push(nums2[b])
      b++;
    }
  }
  // while(
  //   arr.length - 1 < i &&
  //   nums1.length > 0 &&
  //   nums2.length > 0
  // ) {
  //   if (nums1[0] < nums2[0]) {
  //     arr.push(nums1[0]);
  //     nums1 = nums1.slice(1);
  //   } else {
  //     arr.push(nums2[0]);
  //     nums1 = nums2.slice(1);
  //   }
  // }
  // if (!nums1.length) {
  //   arr = [...arr, ...nums2.slice(0, 0 + i + 1 - arr.length)]
  // }
  // if (!nums2.length) {
  //   arr = [...arr, ...nums1.slice(0, 0 + i + 1 - arr.length)]
  // }
  if (a === nums1.length) {
    arr = [...arr, ...nums2.slice(b, b + i + 1 - arr.length)]
  }
  if (b === nums2.length) {
    arr = [...arr, ...nums1.slice(a, a + i + 1 - arr.length)]
  }
  if (allL % 2) {
    return arr[i];
  } else {
    return (arr[i - 1] + arr[i]) / 2
  }
};

console.log(findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1]))