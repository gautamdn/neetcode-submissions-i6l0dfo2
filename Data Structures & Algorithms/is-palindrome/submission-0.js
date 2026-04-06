class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            while(l < r && !this.isAlphaNum(s[l])) {
                 l++;
            }
            while(l < r && !this.isAlphaNum(s[r])) {
                 r--;
            }
            if(s[l].toLowerCase() != s[r].toLowerCase()) 
            {
                return false;
            }
            l++;
            r--;
        }
        return true;

    }

    isAlphaNum(c) {
        if((c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9')){
           return true;
        }
        return false;
    }
}
