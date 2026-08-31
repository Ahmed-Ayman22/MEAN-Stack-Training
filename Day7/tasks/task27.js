const originalObj = {
  name: "Mona",
  details: { city: "Cairo" }
};

const shallowCopy = { ...originalObj };
shallowCopy.name = "Nada";
shallowCopy.details.city = "Alex";

console.log("original: " + JSON.stringify(originalObj));
console.log("shallow copy: " + JSON.stringify(shallowCopy));
