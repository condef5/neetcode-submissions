class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const lastSeen = new Map();
        let best = 0;
        let start = 0;

        for (let i = 0; i < s.length; i++) {
            if (lastSeen.has(s[i]) && lastSeen.get(s[i]) >= start) {
                start = lastSeen.get(s[i]) + 1
            }

            lastSeen.set(s[i], i);
            best = Math.max(best, i - start + 1);
        }


        return best;
    }
}
