class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function minCameraCover(root: TreeNode | null): number {
    type statusCode = 0 | 1 | 2
    let resCount: number = 0
    if (recur(root)==0) {
        resCount++
    }
    return resCount
    function recur(root: TreeNode | null): statusCode{
        if (root === null) {
            return 2
        }
        let resStatus:statusCode = 0
        let left: number = recur(root.left)
        let right: number = recur(root.right)
        if (left == 0 || right == 0) {
            resStatus = 1
            resCount++
        } else if (left == 1 || right == 1) {
            resStatus = 2
        } else {
            resStatus = 0
        }
        return resStatus
    }
};