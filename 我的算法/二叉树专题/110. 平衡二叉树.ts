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

// 平衡二叉树递归
function isBalanced(root: TreeNode | null): boolean {
    function getHeight(root: TreeNode | null): number{
        if (root === null) {
            return 0
        }
        let leftHeight: number = getHeight(root.left)
        if (leftHeight === -1) {
            return -1
        }
        let rightHeight: number = getHeight(root.right)
        if (rightHeight === -1) {
            return -1
        }
        return Math.abs(leftHeight - rightHeight) > 1 ? -1 : 1 + Math.max(leftHeight, rightHeight)
    }
    return getHeight(root) === -1 ? false : true
}