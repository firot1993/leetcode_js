/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    var left = nums[0], mid = undefined;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < left) left = nums[i];
        if (nums[i] > mid) {
            return true;
        }
        if (nums[i] > left) mid = nums[i];
    }
    return false;
};

var a = [5,1,5,5,2,5,4]
console.log(increasingTriplet(a));

