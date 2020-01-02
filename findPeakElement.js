/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return erfen(nums, 0, nums.length-1);
};

var erfen = function(nums, l, r){
    if (l==r) return l;
    var mid = parseInt((l + r ) /2);
    if (nums[mid]>nums[mid+1])
        return erfen(nums,l,mid);else return erfen(nums,mid+1,r);
}

console.log(findPeakElement([1,2,1,3,5,6,4]));