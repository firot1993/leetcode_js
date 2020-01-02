/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var f = [];
  f[0] = true;
  for (var i = 0; i < nums.length; i++){
      if (f[i]){
          for (var j = 1; j <= nums[i]; j++){
              f[i + j] = true;
          }
      }
  } 
  console.log(f);
  return f[nums.length-1] == undefined ? false: true;
};

console.log(canJump([3,2,1,0,4]));