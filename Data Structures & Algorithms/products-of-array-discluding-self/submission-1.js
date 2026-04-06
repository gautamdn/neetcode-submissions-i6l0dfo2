class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [];
        let suf = [];
        let result = [];
        pre[0] = 1;
        suf[nums.length -1] = 1;

        for (let i = 1; i< nums.length; i++) {
            pre[i] = pre[i-1] * nums[i-1];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            suf[i] = suf[i+1] * nums[i+1];
        }
        for (let i =0; i < nums.length; i++) {
            result[i] = pre[i] * suf[i];
        }
        return result;
    }
}
