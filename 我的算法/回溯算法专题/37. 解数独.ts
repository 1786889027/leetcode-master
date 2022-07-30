function solveSudoku(board: string[][]): void {
    function isValid(val: string, colNum: number, rowNum: number, board: string[][]): boolean{
        for (const col of board[rowNum]) {
            if (col === val) {
                return false
            }
        }
        for (const row of board) {
            if (row[colNum] === val) {
                return false
            }
        }
        const startX = Math.floor(colNum / 3) * 3
        const startY = Math.floor(rowNum / 3) * 3
        for (let rowIndex = startY; rowIndex < startY + 3; rowIndex++) {
            for (let colIndex = startX; colIndex < startX+3; colIndex++) {
                if (board[rowIndex][colIndex] === val) {
                    return false
                }
            }
        }
        return true
    }
    function backtracking(n: number, board: string[][]): boolean{
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                if (board[row][col] === '.') {
                    for (let i = 1; i <= n; i++) {
                        if (isValid(String(i), col, row, board)) {
                            board[row][col] = String(i)
                            if (backtracking(n, board) === true) {
                                return true
                            }
                            board[row][col] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    let n: number = 9
    backtracking(n, board)
};