/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let max = nums[0]

    for (let i =0; i < nums.length; i++)
    {
        if (nums[i] === max)
        {
            count++
        }
        else if (nums[i] !== max & count > 0)
        {
            count--
        }
        else
        {
            max = nums[i]
            count++
        }
    }
    return max
    
};