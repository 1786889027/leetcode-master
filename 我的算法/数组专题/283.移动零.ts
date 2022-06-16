/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let fast: number = 0;
  let slow: number = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      let temp: number = nums[fast];
      nums[fast] = nums[slow];
      nums[slow] = temp;
      slow++;
    }
    fast++;
  }
}
