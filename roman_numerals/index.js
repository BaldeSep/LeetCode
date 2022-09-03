/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanDict = {
        "M": {
            "decimal": 1000,
            "modifier": {
                "value": false,
                "postnums": [] 
            }
        },
        "D": {
            "decimal": 500,
            "modifier": {
                "value": false,
                "postnums": [] 
            }
        }, 
        "C": {
            "decimal": 100,
            "modifier": {
                "value": true,
                "postnums": [ "D", "M"] 
            }
        },
        "L": {
            "decimal": 50,
            "modifier": {
                "value": false,
                "postnums": [] 
            }
        },
        "X": {
            "decimal": 10,
            "modifier": {
                "value": true,
                "postnums": [ "L", "C"] 
            }
        },
        "V": {
            "decimal": 5,
            "modifier": {
                "value": false,
                "postnums": [] 
            }
        },
        "I": {
            "decimal": 1,
            "modifier": {
                "value": true,
                "postnums": [ "V", "X"] 
            }
        }
    }
    
    let decimalValue = 0;

    for( let i = 0; i < s.length;){
        // The roman numeral is a modifier
        if( romanDict[s[i]].modifier.value && (i+1) < s.length ){
            if( romanDict[s[i]].modifier.postnums.includes(s[i+1]) ){
                decimalValue += (romanDict[s[i+1]].decimal - romanDict[s[i]].decimal);
                i += 2;
                continue;
            }
        }
        
        decimalValue += romanDict[s[i]].decimal;
        i++;
    }
    
    return decimalValue;
};
