/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var count = 0;
  var ans = null;
  for (var x of nums){
      if (count == 0) ans = x;
      if (x == ans) count++; else count--;
  }  
  return ans;
};

console.log(majorityElement([2,2,1,1,1,2,2]));