class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isAlphanumeric = (s) => /[a-z0-9]/i.test(s);

        while(left < right) {
            while(left < right && !isAlphanumeric(s[left]))
                left++;
            while(left < right && !isAlphanumeric(s[right]))
                right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
