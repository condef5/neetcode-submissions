class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) break;

      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum < 0) {
          left++;
        } else if (sum > 0) {
          right--;
        } else {
          result.push([nums[i], nums[left], nums[right]]);

          left++;
          right--;

          while (nums[left] === nums[left - 1]) left++;
          while (nums[right] === nums[right + 1]) right--;
        }
      }
    }

    return result;
  }
}