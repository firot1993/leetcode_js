/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var f = [];
    f[-1] = [0, 0];
    f[0] = [0, 0];
    for (var i = 1; i < nums.length; i++) {
        f[i] = [Math.max(f[i - 1][0], f[i - 1][1]), f[i - 1][0] + nums[i]];
    }
    var ans = Math.max(f[nums.length - 1][0], f[nums.length - 1][1]);
    f[0] = [nums[0], nums[0]];
    f[1] = [nums[0], nums[0]];

    for (var i = 2; i < nums.length; i++) {
        f[i] = [Math.max(f[i - 1][0], f[i - 1][1]), f[i - 1][0] + nums[i]];
    }

    var ans = Math.max(ans, Math.max(f[nums.length - 2][0], f[nums.length - 2][1]));
    return ans;
}

console.log(rob([1]))