/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let output = [];
    let newSet = new Set(nums);
    for (i=1; i<=nums.length; i++){
        !newSet.has(i) && output.push(i)
    }
    return output;
};