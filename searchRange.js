/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return erfen(nums, target, 0, nums.length - 1);
};

var erfen = function (nums, target, l, r) {
    if (r - l <= 1) {
        if (nums[l] == target && nums[r] == target) return [l, r];
        if (nums[l] == target) return [l, l];
        if (nums[r] == target) return [r, r];
        return [-1, -1]
    }
    var mid = parseInt((l + r) / 2);
    if (nums[mid] > target) {
        return erfen(nums, target, l, mid);
    } else if (nums[mid] < target) {
        return erfen(nums, target, mid + 1, r);
    } else if (nums[mid] == target) {
        var midlr = mid;
        var midrl = mid;

        while (nums[l] != target && l != midlr) {
            var midl = parseInt((l + midlr) / 2);
            if (nums[midl] < target) {
                l = midl;
            } else {
                midlr = midl;
            }
            if (midlr - l  <= 1){
                if (nums[l] == target) break;
                l  = midlr;
                break;
            }
        }

        while (nums[r] != target && r != midrl) {
            var midr = parseInt((r + midrl) / 2);
            if (nums[midr] > target) {
                r = midr;
            } else {
                midrl = midr;
            }
            if (r - midrl  <= 1){
                if (nums[r] == target) break;
                r  = midrl;
                break;
            }
        }
        return [l, r];
    }
}

var nums = [];
console.log(searchRange(nums, 4))