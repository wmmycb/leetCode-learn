/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const mapObj = new Map([[nums[0], 0]]);
  for (let i = 1; i < nums.length; i++) {
    const j = target - nums[i]
    if (mapObj.has(j)) {
      return [mapObj.get(j), i]
    }
    mapObj.set(nums[i], i)
  }
  return []
};
var twoSum = function(nums, target) {
  const mapObj = {
    [nums[0]]: 0
  };
  for (let i = 1; i < nums.length; i++) {
    const j = target - nums[i]
    if (j < 0) continue;
    console.log(j)
    if (mapObj[j] !== undefined) {
      return [mapObj[j], i]
    }
    mapObj[nums[i]] = i
  }
  return []
};

console.log(twoSum([0,4,3,0], 0))