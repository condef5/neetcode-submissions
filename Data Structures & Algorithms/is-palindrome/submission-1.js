class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isAlphanumeric = (str) => /[a-z0-9]/i.test(str);

        while(left < right) {
            // logic
            while(left < right && !isAlphanumeric(s[left])) { left++ }
            while(left < right && !isAlphanumeric(s[right])) { right-- }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
