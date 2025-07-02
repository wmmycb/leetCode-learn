var twoSum = function(nums, target) {
  const _nums = nums.sort((a,b) => a-b)
  for (let i = 0; i < _nums.length - 1; i++) {
    const num = _nums[i]
    const j = addTwo(num, _nums.slice(i + 1), target);
    if (j) {
      return [i, nums.findIndex((item) => item === j)]
    }
  }
};
function addTwo(s, arr, target) {
  if (arr.length === 0) return -1
  const n = Math.floor(arr.length / 2);
  if (s + arr[n] > target) return addTwo(s, arr.slice(0, n), target)
  else if (s + arr[n] < target) return addTwo(s, arr.slice(n + 1),target)
  else  return arr[n]
}

console.log(twoSum([2,5,7,11,], 9))