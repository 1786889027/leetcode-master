function findItinerary(tickets: string[][]): string[] {
    type TicketsMap = {
        [index:string]:Map<string,number>
    }
    tickets.sort((a, b) => {
        return a[1] < b[1] ? -1 : 1
    })
    const ticketMap:TicketsMap = {}
    for (const [from,to] of tickets) {
        if (ticketMap[from] === undefined) {
            ticketMap[from] = new Map()
        }
        ticketMap[from].set(to, (ticketMap[from].get(to) || 0) + 1)
    }
    const resRoute = ['JFK'] 
    const backtracking = (ticketMap:TicketsMap,tempArr:string[]): boolean => {
        if (tempArr.length === tickets.length + 1) {
            return true
        }
        const targetMap = ticketMap[tempArr[tempArr.length - 1]]
        if (targetMap !== undefined) {
            for (const [to, count] of targetMap.entries()) {
                if (count > 0) {
                    tempArr.push(to)
                    targetMap.set(to, count - 1)
                    if (backtracking(ticketMap, tempArr)) {
                        return true
                    }
                    targetMap.set(to, count)
                    tempArr.pop()
                }
            }
        }
        return false
    }
    backtracking(ticketMap, resRoute)
    return resRoute
};