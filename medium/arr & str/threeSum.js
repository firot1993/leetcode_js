/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((x, y) => x - y)
    var ret = [];
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        if (nums[i] > 0) break;
        var x = i + 1, y = nums.length - 1;
        while (x < y) {
            if (x > i + 1 && nums[x] == nums[x - 1] && x++) continue;
            if (y < nums.length - 1 && nums[y] == nums[y + 1] && y--) continue;
            if (nums[i] + nums[x] + nums[y] == 0) {
                ret.push([nums[i], nums[x++], nums[y--]]);
                continue;
            }
            if (nums[i] + nums[x] + nums[y] < 0 && x++) continue;
            if (nums[i] + nums[x] + nums[y] > 0 && y--) continue;
        }
    }
    return ret;
};

