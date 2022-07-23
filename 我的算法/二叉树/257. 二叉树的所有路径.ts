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

// 回溯
function binaryTreePaths(root: TreeNode | null): string[] {
    let pathArr:string[] = []
    function getPath(node: TreeNode, route: string, pathArr: string[]) {
        route += String(node.val)
        if (!node.left && !node.right) {
            pathArr.push(route)
            return
        }
        if (node.left) {
            getPath(node.left, route + '->', pathArr)
        }   
        if (node.right) {
            getPath(node.right, route + '->', pathArr)
        }
    }
    if (!root) {
        return pathArr
    }
    getPath(root, '', pathArr)
    return pathArr
};

function binaryTreePaths2(root: TreeNode | null): string[] {
    let pathArr:string[] = []
    let routeArr:string[] = []
    let tempNode: TreeNode
    let helperStack: TreeNode[] = []
    if (root) {
        helperStack.push(root)
        routeArr.push(root.val+'')
    }
    while (helperStack.length > 0) {
        tempNode = helperStack.pop()!
        let route: string = routeArr.pop()!
        if (!tempNode.left && !tempNode.right) {
            pathArr.push(route)
        }
        if (tempNode.right) {
            helperStack.push(tempNode.right)
            routeArr.push(route + '>' + tempNode.right.val)
        }
        if (tempNode.left) {
            helperStack.push(tempNode.left);
            routeArr.push(route + '->' + tempNode.left.val);
        }
    }
    return pathArr
};