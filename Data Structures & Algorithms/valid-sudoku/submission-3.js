class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                const value = board[row][col];

                if (value == '.') continue;

                const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                const rowKey = `row-${row}-${value}`; 
                const colKey = `col-${col}-${value}`;
                const boxKey = `box-${box}-${value}`;

                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey))
                    return false;

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }


        return true;
    }
}
