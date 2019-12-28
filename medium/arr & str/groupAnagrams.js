/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var table = initPrimeTable();
    var ret = {};
    strs.forEach(str=>{
        var num = calc(str, table);
        if (ret[num] == undefined) {
            ret[num] = [];
        } 
        ret[num].push(str);
    })
    var ans = [];
    for (var x in ret){
        ans.push(ret[x]);
    }
    return ans;
}

var calc = function(str, table){
    var number = 1;
    for (var x of str){
        number = number * table[(x.charCodeAt() - 'a'.charCodeAt())];
      //  number = number % 10000007;
    }
    return number;
}

var initPrimeTable = function(){
    var ret = [2,3,5,7];
    for (var i = 8; i < 1000; i++){
        var prime = true;
        for (var j = 2; j <= Math.ceil(Math.sqrt(i)); j++){
            if (i%j==0) {
                prime = false;
                break;
            }
        }
        if (prime) ret.push(i);
        if (ret.length  > 26) break;
    }
    return ret;
}