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


function isValidBST(root: TreeNode | null): boolean {
    const traversalArr:number[] = []
    function inorderTraverse(root: TreeNode | null): void {
        if (root === null) return;
        inorderTraverse(root.left);
        traversalArr.push(root.val);
        inorderTraverse(root.right);
    }
    inorderTraverse(root)
    for (let i = 0; i < traversalArr.length; i++) {
        if (traversalArr[i] > traversalArr[i + 1]) {
            return false
        }
    }
    return true
};