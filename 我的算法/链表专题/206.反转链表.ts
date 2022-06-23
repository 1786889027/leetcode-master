class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// 双指针法
function reverseList(head: ListNode | null): ListNode | null {
    let curNode: ListNode | null = head
    let pre: ListNode | null = null
    while (curNode) {
        let temp: ListNode | null = curNode.next
        curNode.next = pre
        pre = curNode
        curNode = temp
    }
    return pre
};

// 递归法
function reverseListRecur(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null
    if (head === null) {
        return newHead
    }
    function recur(node: ListNode | null, preNode: ListNode | null): void{
        if (node?.next === null) {
            newHead = node
            newHead.next = preNode
        } else {
            recur(node!.next, node)
            node!.next = preNode
        }
    }
    recur(head, null)
    return newHead
};