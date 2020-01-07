/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (word1.length == 0 || word2.length == 0) return Math.max(word1.length, word2.length);
    var f = [];
    f[-1] = [];
    f[-1][-1] = 0;
    for (var i = 0; i < word2.length; i++){
        f[-1][i] = i + 1;
    }
    for (var i = 0; i < word1.length; i++) {
        f[i] = [];
        f[i][-1] = i + 1;
        for (var j = 0; j < word2.length; j++) {
            f[i][j] = 0xfffff;
            var inc = (word1[i] == word2[j] ? 0 : 1);
            if (f[i - 1][j - 1] != undefined) {
                f[i][j] = Math.min(f[i - 1][j - 1] + inc, f[i][j]);
            }
            f[i][j] = Math.min(f[i][j], f[i - 1][j] + 1);
            f[i][j] = Math.min(f[i][j], f[i][j - 1] + 1)
        }
    }
    return f[word1.length-1][word2.length-1];
};


console.log(minDistance("horse", "ros"));