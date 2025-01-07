// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

var stringMatching = function (words) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[i].includes(words[j])) {
        if (!result.includes(words[j])) {
          result.push(words[j]);
        }
      }
    }
  }
  return result;
};
// var stringMatching = function (words) {
//   let res = [];
//   let set1 = new Set();
//   for (let i of words) {
//     if (!set1.has(i)) {
//       set1.add(i);
//     }
//   }
//   let new_words = [];
//   for (let i of set1) {
//     new_words.push(i);
//   }
//   for (let i of new_words) {
//     for (let j = 0; j < new_words.length; j++) {
//       if (new_words[j].includes(i) && new_words[j] !== i) {
//         res.push(i);
//       }
//     }
//   }
//   let set2 = new Set();
//   for (let i of res) {
//     if (!set2.has(i)) {
//       set2.add(i);
//     }
//   }
//   let new_words2 = [];
//   for (let i of set2) {
//     new_words2.push(i);
//   }
//   return new_words2;
// };

const words = ["mass", "as", "hero", "superhero"];
console.log(stringMatching(words));
