console.log("===============Array traversing Normal Way ===================");
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("===============Array traversing in reverse===================");
// Array traversing in reverse here -1 concept is that is  array length is 5 then it will start from 0 to 4 so that use -1
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log("===============Array traversing  ===================");

arr.forEach((element, index) => {
  // console.log(element, index); console it will print element and index
  // apply  here condition as i want
  if (element % 2 === 0) {
    console.log(arr[index]);
  }
});

//* for..of loop
// It Should use when i do not want to use index
// **

for (const el of arr) {
  console.log(el);
}

// real case od use

const word = "hello";
function reverseWord(word) {
  //  Method 1
  const rWord = [];
  for (const letter of word) {
    rWord.push(letter);
  }
  rWord.reverse();
  console.log(rWord.join(""));
  // method 2
  console.log("===============");
  const newWord = [];
  const wordArray = word.split("");
  for (let i = wordArray.length - 1; i >= 0; i--) {
    newWord.push(wordArray[i]);
  }
  console.log(newWord.join(""));
}

reverseWord(word);
console.log("==================================");
