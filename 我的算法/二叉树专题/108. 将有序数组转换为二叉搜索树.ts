class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function recur(nums: number[], left: number, right: number):TreeNode | null {
        if (left > right) {
            return null
        }
        let mid: number = Math.floor((left + right) / 2)
        let root: TreeNode = new TreeNode(nums[mid])
        root.left = recur(nums, left, mid - 1)
        root.right = recur(nums, mid + 1, right)
        return root
    }
    return recur(nums, 0, nums.length - 1)
};