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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return []
    let resArr: number[][] = []
    let helperQueue: TreeNode[] = []
    let tempArr:number[] = []
    let curNode: TreeNode
    helperQueue.push(root)
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            curNode = helperQueue.shift()!;
            tempArr.push(curNode.val);
            if (curNode.left !== null) {
                helperQueue.push(curNode.left);
            }
            if (curNode.right !== null) {
                helperQueue.push(curNode.right);
            }
        }
        resArr.push(tempArr)
        tempArr = []
    }
    return resArr
};