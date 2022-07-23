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

// 递归
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let leftNum:number = countNodes(root.left)
    let rightNum: number = countNodes(root.right)
    let treeNum: number = leftNum + rightNum + 1
    return treeNum
};

// 迭代
function countNodes2(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    let helperQueue: (TreeNode | null)[] = []
    let ans: number = 0
    helperQueue.push(root)
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++){
            let node: TreeNode | null = helperQueue.shift()!
            ans++
            if (node.left) {
                helperQueue.push(node.left)
            }
            if (node.right) {
                helperQueue.push(node.right)
            }
        }
    }
    return ans
};

function countNodes3(root: TreeNode | null): number {
    if (root === null) return 0;
    let left: number = 0,
        right: number = 0;
    let curNode: TreeNode | null= root;
    while (curNode !== null) {
        left++;
        curNode = curNode.left;
    }
    curNode = root;
    while (curNode !== null) {
        right++;
        curNode = curNode.right;
    }
    if (left === right) {
        return 2 ** left - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};