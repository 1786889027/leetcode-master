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
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return root
    let tempNode: TreeNode | null = root.left
    root.left = root.right
    root.right = tempNode
    invertTree(root.left)
    invertTree(root.right)
    return root
};

// 迭代法
function invertTree2(root: TreeNode | null): TreeNode | null {
    let helperStack: (TreeNode | null)[] = []
    let curNode: TreeNode | null
    let tempNode: TreeNode | null
    helperStack.push(root)
    while (helperStack.length > 0) {
        curNode = helperStack.pop()!
        if (curNode) {
            helperStack.push(curNode)
            helperStack.push(null)
            if (curNode.left) helperStack.push(curNode.left)
            if (curNode.right) helperStack.push(curNode.right)
        } else {
            curNode = helperStack.pop()!
            tempNode = curNode.left
            curNode.left = curNode.right
            curNode.right = tempNode
        }
    }
    return root
}

// 迭代法（队列模拟层序遍历）
function invertTree3(root: TreeNode | null): TreeNode | null {
    const helperQueue: TreeNode[] = [];
    let curNode: TreeNode,
        tempNode: TreeNode | null;
    if (root !== null) helperQueue.push(root);
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            curNode = helperQueue.shift()!;
            tempNode = curNode.left;
            curNode.left = curNode.right;
            curNode.right = tempNode;
            if (curNode.left !== null) helperQueue.push(curNode.left);
            if (curNode.right !== null) helperQueue.push(curNode.right);
        }
    }
    return root;
};