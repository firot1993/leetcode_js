/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var f = [];
  for (var i = 0; i < s.length; i++){
      f.push([])
      f[i][i] = true;
  }  
  var ans = 1, ansst =0;
  for (var j = 1;  j < s.length; j++){
      for (var i = 0; (j + i) < s.length; i++){
        var k = i + j;
        f[i][k] = s[i] == s[k];
        if (j > 1){
            f[i][k] = f[i][k] && f[i+1][k-1]; 
        }
        if (f[i][k] && j + 1 > ans)  {
            ans = j + 1;
            ansst = i;
        }
      }
  }
  return s.substr(ansst, ans);
  
};

console.log(longestPalindrome('abccba'));