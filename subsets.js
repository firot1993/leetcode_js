/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   var ret = subsets2(nums);
   ret.push([])
   return ret;
};

var subsets2 = function(nums){
    if (nums.length==1) return [nums];
    var x = nums[0];
    var ret = [];
    ret.push([x]);
    var newSubset = subsets(nums.slice(1));
    newSubset.forEach(nx=>{
        ret.push(nx);
        ret.push([x].concat(nx));
    });
    return ret;
}

console.log(subsets([1,2,3]))