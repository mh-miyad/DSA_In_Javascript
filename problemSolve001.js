// 1.
// Two Sum - Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Example:

// •  Input: nums = [2, 7, 11, 15], target = 9

// •  Output: [0, 1]

// •  Explanation: Because nums[0] + nums[1] == 2 + 7 == 9, we return [0, 1].

//  problem sloving -1

const nums = [2, 7, 11, 15];
const target = 26;
function twoSum(arr, tar) {
  for (let num of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (num + arr[j] === tar) {
        return [num, arr[j]];
      }
    }
  }
}

const result = twoSum(nums, target);
console.log(result);
