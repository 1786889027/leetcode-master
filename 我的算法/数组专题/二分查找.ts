/* eslint-disable no-bitwise */
function binarySearch(arr: number[], target: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;
  while (left < right) {
    const mid: number = ~~((left + right) / 2);
    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
console.log(binarySearch([5, 3, 8, 9, 2, 7], 7));
