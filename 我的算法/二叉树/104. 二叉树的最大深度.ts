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
function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let leftHeight = maxDepth(root.left)
    let rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
};

// 队列
function maxDepth2(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let depth:number = 0
    let helperQueue: (TreeNode | null)[] = []
    let node: TreeNode | null
    helperQueue.push(root)
    while (helperQueue.length > 0) {
        let length:number = helperQueue.length
        while (length > 0) {
            node = helperQueue.shift()!
            if (node.left) {
                helperQueue.push(node.left)
            }
            if (node.right) {
                helperQueue.push(node.right)
            }
            length--
        }
        depth++
    }
    return depth
};