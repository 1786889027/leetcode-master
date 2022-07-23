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

// 递归
function sumOfLeftLeaves(root: TreeNode | null): number {
    let midVal: number = 0
    if (root === null) {
        return 0
    }
    if (root.left && !root.left.left && !root.left.right) {
        midVal = root.left.val
    }
    let leftVal: number = sumOfLeftLeaves(root.left)
    let rightVal: number = sumOfLeftLeaves(root.right)
    return leftVal + midVal + rightVal
};

// 迭代法
function sumOfLeftLeaves2(root: TreeNode | null): number {
    let helperStack: TreeNode[] = []
    let ans:number = 0
    let node: TreeNode
    if (root) {
        helperStack.push(root)
    }
    while (helperStack.length > 0) {
        node = helperStack.pop()!
        if (node.left && !node.left.left && !node.left.right) {
            ans += node.left.val
        }
        if (node.right) {
            helperStack.push(node.right)
        }
        if (node.left) {
            helperStack.push(node.left)
        }
    }
    return ans
};