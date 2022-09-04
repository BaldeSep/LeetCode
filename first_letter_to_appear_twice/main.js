/**
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    let stringMap = new Map();
    let firstLetterToAppearTwice = {
        Letter: null,
        SecondIndex: Number.MAX_VALUE
    }; 
    for(let i = 0; i < s.length; i++){
        if(stringMap.has(s[i])){
            stringMap.get(s[i]).push(i);
        }else{
            stringMap.set( s[i], [i] );
        }

        if( stringMap.get(s[i]).length > 1 ){
            if( stringMap.get(s[i])[1] < firstLetterToAppearTwice.SecondIndex ){
                firstLetterToAppearTwice = {
                    Letter: s[i],
                    SecondIndex: i
                }
            }
        }
    }

    return firstLetterToAppearTwice.Letter;
};