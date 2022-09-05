/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let startingIndex = 0;
    let uniqueItemIndex = 0;
    let cursor = uniqueItemIndex + 1;
    while( cursor < nums.length ){
        if( nums[uniqueItemIndex] !== nums[cursor] ){
            nums[++startingIndex] = nums[cursor];
            uniqueItemIndex = cursor;
        }
        cursor++;
    }
    
    return startingIndex + 1;
};