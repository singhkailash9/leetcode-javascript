/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort((a, b) => a - b);
    let map = new Map();

    for (let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], i);
        }
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(map.get(nums[i]));
    }

    return result;
};