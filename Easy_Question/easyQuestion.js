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

//? Generate Fibonacci Sequence
function generateFibonacci(n) {
  let fibonacci = [];
  if (n <= 0) return fibonacci;
  function addindition(i, j) {
    if (fibonacci.length < n) {
      fibonacci.push(i);
      addindition(j, i + j);
    }
  }
}

console.log(generateFibonacci(5));
