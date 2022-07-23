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
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null || root.val === val) {
        return root
    }
    if (val > root.val) {
       return searchBST(root.right,val)
    }
    if (val < root.val) {
       return searchBST(root.left,val)
    }
    return null
};

// 迭代法
function searchBST2(root: TreeNode | null, val: number): TreeNode | null {
    let resNode:TreeNode|null = root
    while (resNode) {
        if (resNode.val === val) {
            return resNode
        }
        if (resNode.val < val) {
            resNode = resNode.right
        } else {
            resNode = resNode.left
        }
    }
    return null
};