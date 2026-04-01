class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        nums.sort();
        for ( let i = nums.length-2; i >= 0; i-- ) 
        {
            if(nums[i] == nums[i+1]) return true;
        }

        return false;
    }
}
