function candy(ratings: number[]): number {
    const candy: number[] = []
    candy[0] = 1
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i-1]+1
        } else {
            candy[i] = 1
        }
    }
    for (let i = ratings.length - 1; i > 0; i++) {
        if (ratings[i - 1] > ratings[i]) {
            candy[i - 1] = Math.max(candy[i - 1], candy[i] + 1)
        }
    }
    return candy.reduce((pre, cur) => pre + cur, 0)
};