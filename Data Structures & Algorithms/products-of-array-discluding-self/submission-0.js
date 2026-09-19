class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const size = nums.length;
        const result = new Array(size).fill(1);

        for(let i = 1; i < size; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        let right = 1;
        for(let i = size - 1; i >= 0; i--) {
            result[i] = (result[i] * right) || 0;
            right *= nums[i];
        }

        return result;
    }
}
