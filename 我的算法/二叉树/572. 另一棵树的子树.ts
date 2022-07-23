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

function dfs(root: TreeNode | null, subRoot: TreeNode | null):boolean {
    if (root === null) {
        return false
    }
    return check(root,subRoot) || dfs(root.left,subRoot) || dfs(root.right,subRoot)
}
function check(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true
    if (!root || !subRoot || root.val !== subRoot.val) {
        return false
    }
    return check(root!.left,subRoot!.left) && check(root!.right,subRoot!.right)
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    return dfs(root,subRoot)
};