class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = {};
        const output = [];
        for (const num of nums) {
            result[num] = (result[num] || 0 ) + 1;
        }
        console.log(result);
        const arrayPairs = Object.entries(result);
        arrayPairs.sort((a,b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
               output[i] = arrayPairs[i][0];
        }
        return output;
    }
}
