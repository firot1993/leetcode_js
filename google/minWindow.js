/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t == "") return "";
    if (s == "") return "";
    var scount = {};
    var tcount = {};
    var total = 0;
    for (var c of t) {
        if (tcount[c] == undefined) {
            tcount[c] = 0;
            total++;
        }
        tcount[c]++;
    }
    var index = [];
    for (var i = 0; i < s.length; i++) {
        var ch = s[i];
        if (tcount[ch] != undefined) index.push(i);
    }
    var current = 0;
    var l = 0, r = 0;
    var ans = undefined;
    while (r < index.length) {

        var ch = s[index[r]];
        if (scount[ch] == undefined) scount[ch] = 0;
        scount[ch]++;

        if (scount[ch] == tcount[ch]) {
            current++;
        }

        if (current == total) {
            if (ans == undefined || index[r] - index[l] + 1 < ans.length) {
                ans = s.slice(index[l], index[r] + 1);
            }
        }
        while (current == total && index[l] <= index[r]) {
            if (ans == undefined || index[r] - index[l] + 1 < ans.length) {
                ans = s.slice(index[l], index[r] + 1);
            }
            if (tcount[s[index[l]]] == undefined || scount[s[index[l]]] > tcount[s[index[l]]]) {
                scount[s[index[l]]]--;
                l++;
            } else {
                break;
            }
        }
        r++;
    }
    if (ans == undefined) return ""; else return ans;
};

var S = "abcd", T = "ad"
console.log(minWindow(S, T))