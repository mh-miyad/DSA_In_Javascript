// 1.
// Two Sum - Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Example:

// •  Input: nums = [2, 7, 11, 15], target = 9

// •  Output: [0, 1]

// •  Explanation: Because nums[0] + nums[1] == 2 + 7 == 9, we return [0, 1].

//  problem sloving -1

function twoSum(nums, target) {
  let result = [];
  for (let num = 0; num < nums.length; num++) {
    for (let j = num + 1; j < nums.length; j++) {
      if (nums[num] + nums[j] === target) {
        result.push(num, j);
        return result;
      }
    }
  }
  return result;
}

const nums = [2, 5, 5, 11];
const target = 10;
const result = twoSum(nums, target);
console.log(result);
