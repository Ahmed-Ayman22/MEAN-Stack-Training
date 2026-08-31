const arr = {
  name: "Mona",
  details: { city: "Cairo" }
};

const deepCopy = structuredClone(arr);
deepCopy.details.city = "Aswan";

console.log("original: " + JSON.stringify(arr));
console.log("deep copy: " + JSON.stringify(deepCopy));
