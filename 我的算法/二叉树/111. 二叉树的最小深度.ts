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
function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    if (root.left && !root.right) {
       return minDepth(root.left) + 1
    }
    if (!root.left && root.right) {
        return minDepth(root.right) + 1
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};

// 迭代
function minDepth2(root: TreeNode | null): number {
    let helperQueue: TreeNode[] = [];
    let resMin: number = 0;
    let tempNode: TreeNode;
    if (root !== null) helperQueue.push(root);
    while (helperQueue.length > 0) {
        resMin++;
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift()!;
            if (tempNode.left === null && tempNode.right === null) return resMin;
            if (tempNode.left !== null) helperQueue.push(tempNode.left);
            if (tempNode.right !== null) helperQueue.push(tempNode.right);
        }
    }
    return resMin;
};