/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var last = [];
    var ans = 0;
    var st = 0;
    for (var i = 0; i < s.length; i++) {
        var index = getIndex(s[i]);
        if (last[index] == undefined || last[index] < st) {
            if (i - st + 1 > ans) ans = i - st + 1;
        } else st = last[index] + 1;
        last[index] = i;
        // console.log(last, "::", ans, "::", st)
    }
    return ans;
};

var getIndex = function (ch) {
    return ch.charCodeAt() - 'a'.charCodeAt();
}

var s = "pwwkew"
console.log(lengthOfLongestSubstring(s));