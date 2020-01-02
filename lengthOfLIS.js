/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length==0) return 0;
    var f = [];
    f[0] = 1;
    for (var i = 1; i < nums.length; i++){
        f[i] = 1;
        for (var j = i-1; j >=0; j--){
            if (nums[j] < nums[i]) f[i] = Math.max(f[j] + 1, f[i]);
        }
    }
    console.log(f);
    return f[nums.length-1];
};

console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))