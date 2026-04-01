class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (const str of strs) {
            const key = this.sorted(str);
            if(key in map) {
                map[key].push(str);
            }
            else {
                map[key] = [str];
            }
        }
        return Object.values(map);
    }

 sorted(s) {
  return Array.from(s).sort().join('');
}

   

}
