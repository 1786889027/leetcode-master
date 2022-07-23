 class NNode {
     val: number
     children: NNode[]
     constructor(val?: number, children?: NNode[]) {
         this.val = (val===undefined ? 0 : val)
         this.children = (children===undefined ? [] : children)
     }
 }

function maxDepth(root: NNode | null) {
    if (!root) {
        return 0;
    }
    let maxChildDepth = 0;
    const children = root.children;
    for (const child of children) {
        const childDepth:number = maxDepth(child);
        maxChildDepth = Math.max(maxChildDepth, childDepth);
    }
    return maxChildDepth + 1;
};