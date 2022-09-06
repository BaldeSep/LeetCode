/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let cursor = 0;
    for( let i = 0; i < nums.length; i++ ){
        if( nums[i] !== val ){
            nums[cursor] = nums[i];
            cursor++;
        }
    }
    
    return cursor;
};