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

// 创建新数组
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length === 0) {
        return null
    }
    const rootVal: number = postorder.pop()!
    const rootValIndex: number = inorder.indexOf(rootVal)
    const rootNode: TreeNode = new TreeNode(rootVal)
    rootNode.left = buildTree(inorder.slice(0, rootValIndex), postorder.slice(0, rootValIndex))
    rootNode.right = buildTree(inorder.slice(rootValIndex + 1), postorder.slice(rootValIndex))
    return rootNode
};