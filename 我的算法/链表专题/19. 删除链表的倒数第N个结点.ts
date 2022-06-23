class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let newHead: ListNode | null = new ListNode(0, head)
    let slowNode: ListNode | null = newHead,
        fastNode: ListNode | null = newHead
    for (let i = 0; i < n; i++) {
        fastNode = fastNode!.next
    }
    while (fastNode!.next) {
        fastNode = fastNode!.next
        slowNode = slowNode!.next
    }
    slowNode!.next = slowNode!.next!.next
    return newHead.next
};