class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        
        for (const word of strs) {
            result += word.length + "#" + word
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while(i < str.length) {
            const hash = str.indexOf("#", i);
            const len = parseInt(str.slice(i, hash));
            
            const start = hash + 1;
            const end = start + len;

            result.push(str.slice(start, end));
            i = end;
        }

        return result
    }
}
