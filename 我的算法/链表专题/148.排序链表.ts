class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// 快速排序方法
function swap(list1:ListNode,list2:ListNode):void {
    let temp = list1.val
    list1.val = list2.val
    list2.val = temp
}
function getListSize(head: ListNode | null): number {
    let size: number = 0
    let cur = head
    while (cur !== null) {
        cur = cur.next
        size++
    }
    return size
}
function sortList(head: ListNode | null): ListNode | null {
    let size = getListSize(head)
    if (size <= 1) {
        return head
    }
    function recur(list: ListNode | null, start: ListNode | null, end: ListNode | null = null) {
        if(start === end) return 
        let pviot: number = start!.val,
            pre: ListNode | null = start,
            cur: ListNode | null = start!.next
        while (cur !== end) {
            if (cur!.val < pviot) {
                pre = pre!.next
                swap(pre as ListNode, cur as ListNode)
            }
            cur = cur!.next
        }
        swap(pre as ListNode, start as ListNode)
        recur(list, start, pre)
        recur(list,pre!.next,cur)
    }
    recur(head,head)
    return head
};

// 归并排序方法
function merge(leftList: ListNode | null, rightList: ListNode | null): ListNode | null{
    let leftNode: ListNode | null = leftList, rightNode: ListNode | null = rightList
    let mergeList: ListNode | null = new ListNode(0, null)
    let curNode = mergeList
    while (leftNode && rightNode) {
        if (leftNode!.val > rightNode!.val) {
            curNode.next = rightNode
            rightNode = rightNode!.next
        } else {
            curNode.next = leftNode 
            leftNode = leftNode!.next
        }
        curNode = curNode.next
    }
    if(leftNode) {
        curNode.next = leftNode
    }
    if (rightNode) {
        curNode.next = rightNode
    }
    return mergeList.next
}
function sortList2(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let slow: ListNode | null = head, fast: ListNode | null = head,
        preslow:ListNode |null = null
    while (fast && fast.next) {
        preslow = slow
        slow = slow!.next
        fast = fast.next.next
    }
    preslow!.next = null
    const leftList = sortList2(head)
    const rightList = sortList2(slow)
    return merge(leftList,rightList)
};

