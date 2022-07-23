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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null
    }
    if (root.val === key) {
        if (!root.left && !root.right) {
            return null
        }
        if (!root.left) {
            return root.right
        }
        if (!root.right) {
            return root.left
        }
        let curNode:TreeNode = root.right
        while (curNode.left !== null) {
            curNode.left = curNode.left
        }
        curNode.left = root.left
        return root.right
    }
    if (root.val > key) {
        root.left = deleteNode(root.left,key)
    } else {
        root.right = deleteNode(root.right,key)
    }
    return root
};