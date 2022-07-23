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
    function traverse(node: TreeNode | null, res: number[]): void {
        if (node === null) return
        res.push(node.val)
        traverse(node.left, res)
        traverse(node.right,res)
    }
    let resArr: number[] = []
    traverse(root,resArr)
    return resArr
};

// 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
    function traverse(node: TreeNode | null, res: number[]): void {
        if (node === null) return
        traverse(node.left, res)
        res.push(node.val)
        traverse(node.right,res)
    }
    let resArr: number[] = []
    traverse(root, resArr)
    return resArr
};

// 后序遍历
function postorderTraversal(root: TreeNode | null): number[] {
    function traverse(node: TreeNode | null, res: number[]): void {
        if (node === null) return
        traverse(node.left, res)
        traverse(node.right,res)
        res.push(node.val)
    }
    let resArr: number[] = []
    traverse(root, resArr)
    return resArr
};