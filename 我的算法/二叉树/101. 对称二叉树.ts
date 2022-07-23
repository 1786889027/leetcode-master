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

// 递归法
function isSymmetric(root: TreeNode | null): boolean {
    if(root === null) return true
    function compare(leftNode: TreeNode | null, rightNode: TreeNode | null): boolean {
        if (leftNode === null && rightNode !== null) return false
        if (leftNode !== null && rightNode === null) return false
        if (leftNode === null && rightNode === null) return true
        else if (leftNode?.val !== rightNode?.val) return false
        let outSide = compare(leftNode!.left, rightNode!.right)
        let inSide = compare(leftNode!.right, rightNode!.left)
        let isSame = outSide && inSide
        return isSame
    }
    return compare(root!.left,root!.right)
};

// 迭代法
function isSymmetric2(root: TreeNode | null): boolean {
    if (root === null) return true
    let helperQueue: (TreeNode | null)[] = []
    let curNode: TreeNode | null
    helperQueue.push(root.left, root.right)
    while (helperQueue.length > 0) {
        let leftNode = helperQueue.shift()
        let rightNode = helperQueue.shift()
        if (!leftNode && !rightNode) {
            continue
        }
        if ((!leftNode || !rightNode || leftNode.val !== rightNode.val)) {
            return false
        }
        helperQueue.push(leftNode.left)
        helperQueue.push(rightNode.right)
        helperQueue.push(leftNode.right)
        helperQueue.push(rightNode.left)
    }
    return true
};