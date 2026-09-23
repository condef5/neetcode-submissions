class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxes = Array.from({ length: 9 }, () => new Set());
        const rows = Array.from({ length: 9} , () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c];

                if (value == '.') continue;
                
                const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(value) || cols[c].has(value) || boxes[b].has(value)) 
                    return false;

                cols[c].add(value);
                rows[r].add(value);
                boxes[b].add(value);
            }
        }

        return true;
    }
}
