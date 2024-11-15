/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    numString = x.toString();
    for(i = 0; i < Math.floor(numString.length/2); i++){
        if(numString.charAt(i) != numString.charAt(numString.length-(i+1))){
            return false
        }
    }
    return true;
};