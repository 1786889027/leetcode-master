class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class MyLinkedList {
    private size: number
    private head: ListNode | null
    private tail: ListNode | null
    constructor() {
        this.size = 0
        this.head = null
        this.tail = null
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1
        }
        let curNode = this.getNode(index)
        return curNode.val
    }

    addAtHead(val: number): void {
        let node:ListNode = new ListNode(val, this.head)
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
        this.size++
    }

    addAtTail(val: number): void {
        let node:ListNode = new ListNode(val, null)
        if (this.tail) {
            this.tail.next = node
        } else {
            this.head = node
        }
        this.tail = node
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        if (index === this.size) {
            this.addAtTail(val)
            return
        }
        if (index > this.size) {
            return
        }
        if (index <= 0) {
            this.addAtHead(val)
            return
        }
        let curNode = this.getNode(index - 1)
        let node:ListNode = new ListNode(val,curNode.next)
        curNode.next = node
        this.size++
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return
        }
        if (index === 0) {
            this.head = this.head!.next
            if (index === this.size - 1){
                this.tail = null
            }
            this.size--
            return
        }
        let curNode: ListNode = this.getNode(index - 1)
        curNode.next = curNode.next!.next
        if (index === this.size - 1) {
            this.tail = curNode
        }
        this.size--
    }
    private getNode(index:number) {
        let curNode = new ListNode(0, this.head)
        for (let i = 0; i <= index; i++) {
            curNode = curNode.next!;
        }
        return curNode
    }
}