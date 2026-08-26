const ages = [16, 21, 17, 19];

const anyAdult = ages.some(age => age >= 18);
const allAdults = ages.every(age => age >= 18);

console.log(anyAdult);
console.log(allAdults);
