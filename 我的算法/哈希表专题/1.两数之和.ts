function twoSum(nums: number[], target: number): number[] {
    let ans:number[] = []
    const map = new Map()
    map.set(nums[0], 0)
    for (let i = 1; i < nums.length; i++) {
        let sum = target - nums[i]
        if (map.has(sum)) {
            ans = [...ans,map.get(sum),i]
        } else {
            map.set(nums[i],i)
        }
    }
    return ans
};