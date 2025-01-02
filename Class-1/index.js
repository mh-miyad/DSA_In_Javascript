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
console.log("==================================");
