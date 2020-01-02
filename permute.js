/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var ret = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != 0xffffffff) {
            var c = nums[i];
            nums[i] = 0xffffffff;
            var tmp = permute(nums);
            if (tmp.length > 0) {
                tmp = tmp.map(x => [c].concat(x));
            } else {
                tmp = [c];
            }
            ret = ret.concat(tmp);
            nums[i] = c;
        }
    }
    if (ret.length < 1) return [ret];
    return ret;
};

console.log(permute([3,2,1]));