function solveNQueens(n: number): string[][] {
    const board: string[][] = new Array(n).fill(0).map(_ => new Array(n).fill('.'))
    const result: string[][] = []
    function transformBoard(board: string[][]): string[] {
        const resArr:string[] = [];
        for (let row of board) {
            resArr.push(row.join(''));
        }
        return resArr;
    }
    function isValid(col: number, row: number, board: string[][]): boolean{
        const n:number = board.length 
        if (col < 0 || col > n || row < 0 || row > n) {
            return false
        }
        // 检查列
        for (const row of board) {
            if (row[col] === 'Q') {
                return false
            }
        }
        // 检查正斜线
        let x: number = row, y: number = col
        while (y >= 0 && x >= 0) {
            if (board[x--][y--] === 'Q') {
                return false
            }
        }
        // 检查反斜线
        x = row, y = col
        while (x >= 0 && y < n) {
            if (board[x--][y++] === 'Q') {
                return false
            }
        }
        return true
    }
    const backtracking = (n:number,rowNum:number,board:string[][]): void => {
        if (rowNum === n) {
            result.push(transformBoard(board))
            return
        }
        for (let i = 0; i < n; i++) {
            if (isValid(i, rowNum, board)) {
                board[rowNum][i] = 'Q'
                backtracking(n, rowNum + 1, board)
                board[rowNum][i] = '.'
            }
        }
    }
    backtracking(n,0,board)
    return result
};
console.log(solveNQueens(4));

