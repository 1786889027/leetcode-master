class MyStack {
    private queue: number[]
    private tempQueue:number[]
    constructor() {
        this.queue = []
        this.tempQueue = []
    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        for (let i = 0, length = this.queue.length - 1; i < length; i++) {
            this.tempQueue.push(this.queue.shift()!)
        }
        let res: number = this.queue.pop()!
        let temp: number[] = this.queue
        this.queue = this.tempQueue
        this.tempQueue = temp
        return res
    }

    top(): number {
        let res: number = this.pop()
        this.queue.push(res)
        return res
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}