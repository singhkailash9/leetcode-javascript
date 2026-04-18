// Using hashmap for two sum leetcode easy problem

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let memory = new Map();
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(memory.has(complement)){
            return [memory.get(complement), i];
        };
        memory.set(nums[i], i);
    }
}