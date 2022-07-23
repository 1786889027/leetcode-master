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

function findBottomLeftValue(root: TreeNode | null): number {
    let maxDeep: number = Number.MIN_SAFE_INTEGER 
    let deepLeftValue: number
    function traversal(node:TreeNode,curDeep:number) {
        if (!node!.left && !node!.right) {
            if (curDeep > maxDeep) {
                maxDeep = curDeep
                deepLeftValue = node.val
            }
            return
        }
        if (node.left) {
            traversal(node.left, curDeep + 1)
        }
        if (node.right) {
            traversal(node.right, curDeep + 1)
        }
        return
    }
    traversal(root!, 0)
    return deepLeftValue!
};

// 迭代
function findBottomLeftValue2(root: TreeNode | null): number {
    let helperQueue: TreeNode[] = []
    if (root) {
        helperQueue.push(root)
    }
    let node: TreeNode
    let bottomLeftValue:number
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++){
            node = helperQueue.shift()!
            if (i===0) {
                bottomLeftValue = node.val
            }
            if (node.left) {
                helperQueue.push(node.left)
            }
            if (node.right) {
                helperQueue.push(node.right)
            }
        }
    }
    return bottomLeftValue!
};