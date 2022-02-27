/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function sortedSquares(nums: number[]): number[] {
  let left: number = 0;
  let right: number = nums.length - 1;
  let res = new Array(nums.length).fill(0);
  let resIndex = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      res[resIndex--] = nums[right] * nums[right];
      right -= 1;
    } else {
      res[resIndex--] = nums[left] * nums[left];
      left += 1;
    }
  }
  return res;
}
console.log(sortedSquares([-4, -1, 0, 3, 10]));
