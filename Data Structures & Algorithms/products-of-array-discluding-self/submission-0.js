class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let result = [];
        let zeroCount = 0;
        for (let n of nums) {
            if(n != 0) {
                prod *= n;
            } else {
                zeroCount++;
            }
        }

        if(zeroCount > 1) {
           return Array(nums.length).fill(0);
        }

        for (let i = 0; i < nums.length; i++) {
            if(zeroCount > 0) {
                if(nums[i] == 0) {
                    result[i] = prod;
                }
                else {
                    result[i] = 0;
                }
            }
            else {
            result[i] = prod / nums[i];
            }
        }
        return result;
    }
}
