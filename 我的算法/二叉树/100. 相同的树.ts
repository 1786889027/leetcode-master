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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false
    let isSame1: boolean = isSameTree(p.left, q.left)
    let isSame2: boolean = isSameTree(p.right, q.right)
    return isSame1 && isSame2
};

// 迭代法(队列)
function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
    let helperQueue1: (TreeNode | null)[] = []
    let helperQueue2: (TreeNode | null)[] = []
    let pNode: TreeNode | null
    let qNode: TreeNode | null
    helperQueue1.push(p)
    helperQueue2.push(q)
    while (helperQueue1.length > 0 && helperQueue2.length>0) {
        pNode = helperQueue1.shift()!
        qNode = helperQueue2.shift()!
        if (!pNode && !qNode) continue
        if (!pNode || !qNode) {
            return false
        }
        if (pNode.val !== qNode.val) {
            return false
        }
        helperQueue1.push(pNode!.left)
        helperQueue1.push(pNode!.right)
        helperQueue2.push(qNode!.left)
        helperQueue2.push(qNode!.right)
    }
    return true
};

// 迭代法(栈)
function isSameTree3(p: TreeNode | null, q: TreeNode | null): boolean {
    let helperStack1: (TreeNode | null)[] = [],
        helperStack2: (TreeNode | null)[] = []
    let pNode: TreeNode | null,
        qNode: TreeNode | null;
    helperStack1.push(p)
    helperStack2.push(q)
    while (helperStack1.length > 0 && helperStack2.length) {
        pNode = helperStack1.pop()!;
        qNode = helperStack2.pop()!;
        if (pNode === null && qNode === null) continue;
        if (pNode === null || qNode === null) return false;
        if (pNode.val !== qNode.val) return false;
        helperStack1.push(pNode.left);
        helperStack1.push(pNode.right);
        helperStack2.push(qNode.left);
        helperStack2.push(qNode.right);
    }
    return true;
};