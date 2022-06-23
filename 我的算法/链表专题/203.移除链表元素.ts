/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function removeElements(head: ListNode | null, val: number): ListNode | null {
    while (head && head.val == val) {
        head = head.next
    }  
    if (head == null) {
        return head
    }
    let pre:ListNode | null = head,cur:ListNode|null = head.next
    while (cur) {
        if (cur.val == val) {
            pre.next = cur.next
        } else {
            pre = pre.next
        }
        cur = cur.next
    }
    return head
};