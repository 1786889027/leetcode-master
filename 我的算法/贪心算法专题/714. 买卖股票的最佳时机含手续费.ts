function maxProfit(prices: number[], fee: number): number {
    const length: number = prices.length
    if (length == 0) return 0
    let minPrice: number = prices[0]
    let resProfit: number = 0
    for (let i = 1; i < length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        if (minPrice + fee < prices[i]) {
            resProfit += prices[i] - minPrice - fee;
            minPrice = prices[i] - fee;
        }
    }
    return resProfit
};