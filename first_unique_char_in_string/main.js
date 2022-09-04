/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let stringMap = new Map();
    for(let i = 0; i < s.length; i++){
        if(stringMap.has(s[i])){
            stringMap.get(s[i]).push(i);
        }else{
            stringMap.set( s[i], [i] );
        }
    }

    let entriesIterator = stringMap.entries();
    let currentEntry = entriesIterator.next();
    let firstUniqueChar = {
        Letter: null,
        Index: s.length
    }; 
    while(!currentEntry.done){
        if(currentEntry.value[1].length === 1 && firstUniqueChar.Index > currentEntry.value[1][0] ){
            firstUniqueChar.Letter = currentEntry.value[0];
            firstUniqueChar.Index = currentEntry.value[1][0];
        }

        currentEntry = entriesIterator.next();
    }
    
    if( firstUniqueChar.Letter === null ){
        return -1;
    }else{
        return firstUniqueChar.Index;
    }

};