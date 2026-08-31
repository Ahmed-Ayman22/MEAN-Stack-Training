const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const mergedArray = [...arr1, ...arr2];

console.log("merged array: " + mergedArray);

const originalNumbers = [10, 20, 30];
const copiedNumbers = [...originalNumbers];

copiedNumbers.push(40);

console.log("copied array: " + copiedNumbers);
console.log("original array: " + originalNumbers);
