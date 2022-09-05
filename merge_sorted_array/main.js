/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let sortedArrEnd = m
    for( let i = 0; i < n; i++ ){
        let insert = nums2[i];
        for(let j = 0; j <= sortedArrEnd; j++){
            if( insert <= nums1[j] ){
                let temp = nums1[j];
                nums1[j] = insert;
                insert = temp;
            }else if( j === sortedArrEnd ){
                nums1[j] = insert;
            }
        }
        sortedArrEnd++;
    }
};