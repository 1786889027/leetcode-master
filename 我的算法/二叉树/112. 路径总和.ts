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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false
    }
    if (!root!.left && !root!.right) {
        if (targetSum === root!.val) {
            return true
        } else {
            return false
        }
    }
    return hasPathSum(root!.left, targetSum - root!.val) || hasPathSum(root!.right, targetSum - root!.val)
};

// 迭代法
function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
    // 定义一个新的数据结构
    type Pair = {
        node: TreeNode, // 当前节点
        sum: number // 根节点到当前节点的路径数值总和
    }

    const helperStack: Pair[] = [];
    if (root !== null) helperStack.push({ node: root, sum: root.val });
    let tempPair: Pair;
    while (helperStack.length > 0) {
        tempPair = helperStack.pop()!;
        if (
            tempPair.node.left === null &&
            tempPair.node.right === null &&
            tempPair.sum === targetSum
        ) return true;
        if (tempPair.node.right !== null) {
            helperStack.push({
                node: tempPair.node.right,
                sum: tempPair.sum + tempPair.node.right.val
            });
        }
        if (tempPair.node.left !== null) {
            helperStack.push({
                node: tempPair.node.left,
                sum: tempPair.sum + tempPair.node.left.val
            });
        }
    }
    return false;
};