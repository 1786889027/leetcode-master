class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var getListSize = function (head) {
    let size = 0, cur = head
    while (cur) {
        size++
        cur = cur.next
    }
    return size
}
var getIntersectionNode = function (headA, headB) {
    let sizeA = getListSize(headA), sizeB = getListSize(headB),
        curA = headA, curB = headB
    if (sizeA < sizeB) {
        [sizeA, sizeB] = [sizeB, sizeA];
        [curA, curB] = [curB, curA]
    }
    let i = sizeA - sizeB
    while (i-- > 0) {
        curA = curA.next
    }
    while (curA && curA !== curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA
};