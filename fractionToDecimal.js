/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (numerator == 0) return '0';
    var negative = false;
    negative = (numerator < 0) ^ (denominator < 0);
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    var left = numerator % denominator;
    var ans = Math.floor(numerator / denominator);
    if (left == 0) return (negative?'-':'')+ans;
    ans = ans + '.';
    left = left * 10;
    var ret = [];
    var appear = {};
    while (left > 0) {
        if (appear[left]!=undefined){
            ret[appear[left]] = "(" + ret[appear[left]];
            ret.push(')');
            break;
        }
        if (left > denominator) {
            appear[left] = ret.length;
            ret.push(Math.floor(left/denominator)+'');
            left = left % denominator * 10;
        } else {
            appear[left] = ret.length;
            ret.push('0');
            left = left * 10;
        }
    }
    if (ret.length > 0) ans = ans + ret.join('');
    return (negative?'-':'')+ans;
};

console.log(fractionToDecimal(1,214748364));