class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead: ListNode = new ListNode(0, head);
    let cur: ListNode = dummyHead
    while (cur.next && cur.next.next) {
        const temp1:ListNode = cur.next
        const temp2: ListNode | null = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = temp1
        cur.next.next.next = temp2
        cur = temp1
    }
    return dummyHead.next
};