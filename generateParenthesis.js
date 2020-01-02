/**
 * @param {number} n
 * @return {string[]}
 */
var tmp = [];
tmp[0] = [''];
tmp[1] = ['()']
var generateParenthesis = function(n) {
    var ret = [];
    if (tmp[n]!=undefined) return tmp[n];
    else {
        for (var x = 0; x <= n-1; x++){
            var ax = generateParenthesis(x);
            var axn = generateParenthesis(n-1-x);
            ax = ax.map(axx=>'('+axx+')');
            ax.forEach(str=>{
                axn.forEach(str1=>{
                    ret.push(str + str1);
                })
            })
        }
    }
    tmp[n] = ret;
    return ret;
};

console.log(generateParenthesis(3))