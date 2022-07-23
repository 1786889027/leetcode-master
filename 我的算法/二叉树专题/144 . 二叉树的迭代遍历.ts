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

// 前序遍历
function preorderTraversal(root: TreeNode | null): number[] {
    let resArr:number[] = []
    if (root === null) {
        return resArr
    } 
    let stack: TreeNode[] = []
    let node: TreeNode | null = root
    stack.push(node)
    while (stack.length > 0) {
        node = stack.pop()!
        resArr.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return resArr
};

// 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
    let resArr:number[] = []
    if (root === null) {
        return resArr
    } 
    let stack: TreeNode[] = []
    let node: TreeNode | null = root
    while (node !== null || stack.length > 0) {
        if (node !== null) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()!
            resArr.push(node.val)
            node = node.right
        }
    }
    return resArr
};

// 后序遍历
function postorderTraversal(root: TreeNode | null): number[] {
    let resArr:number[] = []
    if (root === null) {
        return resArr
    } 
    let stack: TreeNode[] = []
    let node: TreeNode | null = root
    stack.push(node)
    while (stack.length > 0) {
        node = stack.pop()!
        resArr.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    return resArr
}