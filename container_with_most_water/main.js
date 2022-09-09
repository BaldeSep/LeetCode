/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let biggestArea = 0;
    
    for( let i = 0; i < height.length; i++ ){
        for( let j = i + 1; j < height.length; j++ ){
            let w = j - i;
            
            let h = height[i] > height[j] ? height[j] : height[i];
            
            let area = w * h;
            
            biggestArea = biggestArea < area ? area : biggestArea;
        }
    }
    
    return biggestArea;
};