/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort()
    var appear = {};
    nums.forEach((value, index) => {
        if (appear[value] == undefined || appear[value] < index) appear[value] = index;
    });
    var ret = [];
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (var j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            var left = 0 - (nums[i] + nums[j]);
            if (appear[left] > j) {
                ret.push([nums[i], nums[j], left]);
            }
        }
    }
    return ret;
};