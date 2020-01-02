/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return erfen(nums, target, 0, nums.length - 1);
};

var erfen = function (nums, target, l, r) {
    console.log(l,r)
    if (nums[l] == target) return l;
    if (nums[r] == target) return r;
    if (r-l <=1){
        return -1;
    }
    var mid = parseInt((l + r) / 2);
    if (nums[l] < nums[r]) {
        if (nums[mid] >= target) return erfen(nums, target, l, mid);
        else return erfen(nums, target, mid + 1, r);
    } else {
        if (nums[mid] > nums[l]){
            if (nums[mid] > target){
                if (nums[l] > target) return erfen(nums, target, mid + 1, r);
                else return erfen(nums, target, l, mid);
            } else {
                return erfen(nums, target, mid, r);
            }
        } else if (nums[mid] < nums[l]){
            if (nums[mid] > target) {
                return erfen(nums, target, l, mid);
            } else {
                if (nums[r] >= target) return erfen(nums, target, mid, r);else
                return erfen(nums, target, l ,mid);
            }
        }
    }
}

console.log(search([5, 1, 3], 3));