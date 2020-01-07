/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var appear = {};
    var maxLength = 0;
    for (var x of wordDict) {
        appear[x] = true;
        maxLength = Math.max(x.length, maxLength);
    }
    console.log(appear)
    var f = [];
    f[-1] = true;
    for (var i = 0; i < s.length; i++) {
        var str = s[i];
        f[i] = false;
        if (appear[str] && f[i - 1]) { 
            f[i] = true; 
            continue; 
        }
        for (var j = i - 1; j >= 0; j--) {
            str = s[j] + str;
            if (appear[str] && f[j - 1]) {
                f[i] = true; break;
            }
        }
    }
    return f[s.length - 1];
};

console.log(wordBreak("leetcode", ["leet", "code"]))