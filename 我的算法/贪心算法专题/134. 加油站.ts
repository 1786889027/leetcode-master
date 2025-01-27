function canCompleteCircuit(gas: number[], cost: number[]): number {
    let total: number = 0;
    let curGas: number = 0;
    let tempDiff: number = 0;
    let resIndex: number = 0;
    for (let i = 0, length = gas.length; i < length; i++) {
        tempDiff = gas[i] - cost[i];
        total += tempDiff;
        curGas += tempDiff;
        if (curGas < 0) {
            resIndex = i + 1;
            curGas = 0;
        }
    }
    if (total < 0) return -1;
    return resIndex;
};