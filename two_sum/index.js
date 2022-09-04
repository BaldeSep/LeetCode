/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    console.log(nums);
    console.log(target);

    // brute force solution
    // let output = [];
    // for( let i = 0; i < nums.length; i++ ){
    //     for( let j = nums.length - 1; j > i; j-- ){
    //         let sum = nums[i] + nums[j];
    //         if( sum === target ){
    //             output.push( i );
    //             output.push( j );
    //         }
    //     }
    // }

    // return output;
    let numsMap = new Map();

    nums.forEach( (num, index) => {
        numsMap.set(num, index);
    });


    numsMap.forEach( (entry, index) => {
        console.log(entry);
    });
        
        
    //     let output = [];
    //     let keysIterator = numsMap.keys();
    //     let valueIterator = numsMap.values();
        
    //     currentValue = keysIterator.next();
    //     currentIndex = valueIterator.next();
    //     while( !currentValue.done && !currentIndex.done ){
    //         let otherNumIndex = numsMap.get(target - currentValue.value);
    //         if( otherNumIndex && currentIndex.value != otherNumIndex && output.length < 2 ){
    //             output.push( numsMap.get(currentValue.value) );
    //             output.push( otherNumIndex );
    //         }
    //         currentValue = keysIterator.next();
    //         currentIndex = valueIterator.next();
    //     }
        
    //     return output;
        
};
    

twoSum( [3,3], 6 );