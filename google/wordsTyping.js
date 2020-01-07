/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    var k = 0;
    var ans = 0;
    var next = [];
    for (var i = 0; i < rows; i++){
        var tmplength = 0;
        var tmpK = k;
        var tmpAns = ans;
        if (next[k]==undefined){
            while (tmplength + sentence[k].length <= cols){
                tmplength = tmplength + sentence[k].length + 1;
                k++;
                if (k==sentence.length) {
                    k = 0;
                    ans++;
                }
            }
            next[tmpK] = [k, ans - tmpAns];
        } else {
            k = next[tmpK][0];
            ans = ans + next[tmpK][1];
        }
    }    
    return ans;
};



console.log(wordsTyping( ["f","p","a"],8,7  ));