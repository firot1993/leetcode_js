/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    var a = {};
    for (var word of words){
        a[word] = calc(word);
    }
    var ans = 0;
    for (var i = 0; i < words.length; i++){
        for (var j = i+1; j < words.length; j++){
            var word1 = words[i];
            var word2 = words[j];
            if ((a[word1] | a[word2]) == (a[word1] + a[word2])){
                ans = Math.max(ans, word1.length * word2.length);
            }
        }
    }
    return ans;
};

var calc = function(word){
    var ret = 0;
    for (var ch of word){
        var x = ch.charCodeAt() - 'a'.charCodeAt();
        ret = ret | (1 << x);
    }
    return ret;
}

console.log(maxProduct(["a","aa","aaa","aaaa"]))