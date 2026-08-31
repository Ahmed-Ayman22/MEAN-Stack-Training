const userObj = { name: "Sara", age: 22 };
const contactObj = { email: "sara@nti.com", age: 23 };

const mergedUser = { ...userObj, ...contactObj };

console.log("merged object: " + JSON.stringify(mergedUser));
