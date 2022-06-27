function threeSum(nums: number[]): number[][] {
    if (nums.length < 3) {
        return []
    }
    const ans: number[][] = []
    const length: number = nums.length
    let right: number = length - 1,
        left: number = 0
    let i:number = 0
    nums.sort((a, b) => a - b)
    while (i < length) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            i++
            continue
        }
        left = i + 1
        right = length - 1
        const set = new Set()
        while (left < right) {
            let sum: number = nums[i] + nums[left] + nums[right]
            if (sum > 0) {
                set.add(nums[right])
                right--
            } else if (sum < 0) {
                set.add(nums[left])
                left++
            } else {
                ans.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
                while (nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
        i++
    }
    return ans
};
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
