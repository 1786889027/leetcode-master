function maxSlidingWindow(nums: number[], k: number): number[] {
    // 单调队列
    class MonoQueue{
        private queue: number[]
        constructor() {
            this.queue = []
        }
        // 入队
        public enqueue(value: number):void{
            let tail: number | undefined = this.queue[this.queue.length - 1]
            while (tail !== undefined && tail < value) {
                this.queue.pop();
                tail = this.queue[this.queue.length - 1]
            }
            this.queue.push(value)
        }
        // 出队
        public dequeue(value: number): void{
            let top: number | undefined = this.queue[0]
            if (top !== undefined && value === top) {
                this.queue.shift()
            }
        }

        public getTop():number|undefined {
            return this.queue[0]
        }
    }
    const monoQueue = new MonoQueue()
    let i: number = 0,
        j: number = 0
    let resArr: number[] = []
    while (j < k) {
        monoQueue.enqueue(nums[j])
    }
    resArr.push(monoQueue.getTop()!)
    while (j < nums.length) {
        monoQueue.enqueue(nums[j])
        monoQueue.dequeue(nums[i])
        resArr.push(monoQueue.getTop()!)
        j++
        i++
    }
    return resArr
};