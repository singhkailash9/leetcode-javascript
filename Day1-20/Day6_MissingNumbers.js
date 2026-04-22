/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // length of array => new array with [0,1.. till length + 1]
    // difference in set and the value left is answer
    const newSet = new Set();
    const numSet = new Set(nums);
    for(let i=0; i<=nums.length; i++){
        newSet.add(i);
    }
    const diff = newSet.difference(numSet);
    return diff.values().next().value;
};