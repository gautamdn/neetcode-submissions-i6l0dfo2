class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(!nums) {
            return [];
        }
        let output = new Map();
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (output.has(complement)) {
                return [output.get(complement), i];
            }
            output.set(nums[i], i);
        }
        return [];
    
        
    }
}
