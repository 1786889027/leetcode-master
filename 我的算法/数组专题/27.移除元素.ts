/* eslint-disable no-param-reassign */
function removeElement(nums: number[], val: number): number {
  let fast:number = 0;
  let slow: number = 0;
  for (; fast < nums.length - 1; fast += 1) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
    }
  }
  return nums.length;
}
console.log(removeElement([3, 2, 2, 3], 3));
