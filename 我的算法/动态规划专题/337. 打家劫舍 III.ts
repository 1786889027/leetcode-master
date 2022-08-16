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

type MaxValueArr = [number, number]

function rob(root: TreeNode | null): number {
    return Math.max(...robNode(root))
};

function robNode(root:TreeNode|null): MaxValueArr {
    if (root == null) return [0, 0]
    const left: MaxValueArr = robNode(root.left)
    const right: MaxValueArr = robNode(root.right)
    const val1: number = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const val2: number = left[0] + right[0] + root.val
    return [val1,val2]
}