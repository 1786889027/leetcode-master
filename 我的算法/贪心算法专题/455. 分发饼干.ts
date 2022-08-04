function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    const childLength: number = g.length,
        cookieLength: number = s.length;
    let curChild: number = 0,
        curCookie: number = 0;
    while (curChild < childLength && curCookie < cookieLength) {
        if (g[curChild] <= s[curCookie]) {
            curChild++;
        }
        curCookie++;
    }
    return curChild;
};