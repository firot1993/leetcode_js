var fuckTable = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0 )return [];
    var index = digits[0].charCodeAt() - '2'.charCodeAt();
    if (digits.length==1) return fuckTable[index];
    var ret = [];
    var substr = digits.substr(1);
    fuckTable[index].forEach(ch=>{
        ret = ret.concat(letterCombinations(substr).map(x=>ch+x));
    })
    return ret;
};

console.log(letterCombinations('23'));