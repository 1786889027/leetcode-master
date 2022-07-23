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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null
    }
    let maxIndex: number = 0
    let maxVal: number = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i]
            maxIndex = i
        }
    }
    const rootNode: TreeNode = new TreeNode(maxVal)
    rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
    rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
    return rootNode
};