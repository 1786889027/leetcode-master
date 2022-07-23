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

function getMinimumDifference(root: TreeNode | null): number {
    let preNode: TreeNode | null = null
    let minVal = Infinity
    function recur(root) {
        if (root == null) {
            return 
        }
        recur(root.left)
        if (preNode) {
            minVal = Math.min(root.val-preNode.val,minVal)
        }
        preNode = root
        recur(root.right)
    }
    recur(root)
    return minVal
};