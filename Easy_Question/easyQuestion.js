// const isPalindrome = function (x) {
//   if (x < 0) return false;
//   let original = x;
//   let reversed = 0;
//   while (x > 0) {
//     let lastDigit = x % 10;
//     reversed = reversed * 10 + lastDigit;
//     x = Math.floor(x / 10);
//   }
//   return original === reversed ? true : false;
// };

// isPalindrome(121);

// function romanToNumber(s) {
//   const romanValues = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     let current = romanValues[s[i]];
//     let next = romanValues[s[i + 1]];

//     if (next > current) {
//       result -= current;
//     } else {
//       result += current;
//     }
//   }

//   return result;
// }

// console.log(romanToNumber("III")); // Output: 3
// console.log(romanToNumber("IX")); // Output: 9
// console.log(romanToNumber("LVIII")); // Output: 58
// console.log(romanToNumber("MCMXCIV")); // Output: 1994

// //? Generate Fibonacci Sequence
// function generateFibonacci(n) {
//   let fibonacci = [];
//   if (n <= 0) return fibonacci;
//   function addindition(i, j) {
//     if (fibonacci.length < n) {
//       fibonacci.push(i);
//       addindition(j, i + j);
//     }
//   }
// }

// console.log(generateFibonacci(5));
//! 14.no question Longest prefix
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let firstPrefix = strs[0];
  let prefix = "";

  for (let i = 0; i < firstPrefix.length; i++) {
    let firstChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== firstChar) {
        return prefix;
      }
      console.log(`inner : ${firstChar}`);
    }
    console.log(`outer : ${firstChar}`);
    prefix += firstChar;
  }
  return prefix;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

// for (let i = 1; i < strs.length; i++) {
//   console.log(`f_l__p : ${strs[i].indexOf(prefix) !== 0}`);
// }

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// console.log(longestCommonPrefix(["ab", "a"])); // Output: "a"

//? 15. no question Maximal Square
// function maximalSquare(matrix) {
//   if (matrix.length === 0) return 0;
//   let rows = matrix.length;
//   let cols = matrix[0].length;
//   let dp = Array.from({ length: rows + 1 }, () =>
//     Array(cols + 1).fill(0)

//   );
//   let max = 0;
//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= cols; j++) {
//       if (matrix[i - 1][j - 1] === "1") {
//         dp[i][j] = Math.min(
//           dp[i - 1][j],
//           dp[i][j - 1],
//           dp[i - 1][j - 1]
//         ) + 1;
//         max = Math.max(max, dp[i][j]);
//       }
//     }
//   }
//   return max * max;
// }

// console.log(

//   maximalSquare([
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"],
//   ])
