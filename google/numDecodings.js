/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length == 0) return 0;
    var f = [];
    f[-1] = 1;
    if (parseInt(s[0])>0) f[0] = 1; else f[0] = 0;
    for (var i = 1; i < s.length; i++){
        if (s[i]!='0') f[i] = f[i-1]; else f[i] = 0;
        if (s[i-1]!='0' && parseInt(s[i-1] + s[i])<=26 && parseInt(s[i-1] + s[i]) > 0){
            f[i] += f[i-2];
        }
    }
    console.log(f);
    return f[s.length - 1];
};