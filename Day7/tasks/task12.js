const nums = [1, 2, 3];

nums.push(4);
nums[0] = 99;
console.log("nums: " + nums);

try {
  nums = [5, 6, 7];
} catch (err) {
  console.log("error: " + err.message);
}
