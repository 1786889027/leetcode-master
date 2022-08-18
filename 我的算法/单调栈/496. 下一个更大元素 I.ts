function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const resArr: number[] = new Array(nums1.length).fill(-1);
    const stack: number[] = [];
    const helperMap: Map<number, number> = new Map();
    nums1.forEach((num, index) => {
        helperMap.set(num,index)
    })
    stack.push(0)
    for (let i = 1; i < nums2.length; i++) {
        let top: number = stack[stack.length - 1]
        while (stack.length > 0 && nums2[top] < nums2[i]) {
            let index = helperMap.get(nums2[top])
            if (index !== undefined) {
                resArr[index] = nums2[i]
            }
            stack.pop()
            top = stack[stack.length - 1]
        }
        if (helperMap.has(nums2[i])) {
            stack.push(i)
        }
    }
    return resArr
};