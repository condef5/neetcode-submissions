class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums);
        let longest = 0;
        
        for (const num of numbers) {
            if (numbers.has(num - 1)) continue;

            let length = 1;

            while (numbers.has(num + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        
        }

        return longest;
    }
}
