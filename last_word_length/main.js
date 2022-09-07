/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    let done = false;
    let lastWordLength = 0;
    
    // We are scanning for the last word from the end to start of the string
    while(index >= 0 && !done){
        // If the current character is a non-empty string
        if( s[index] !== ' ' ){
            
            // You reached the start of the string
            if( index === 0 ){
                done = true;
            }else if( s[index - 1] === ' ' ){
                // if the next character is an empty string we are done scanning for the last word
                done = true;
            }
            
            // Increment the length of the last word
            lastWordLength++;
        }
        
        index--;
    }
    
    return lastWordLength;
};