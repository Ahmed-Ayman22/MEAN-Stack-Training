function noStrictTest() {
  myGlobal = "I am a global variable";
}

noStrictTest();
console.log("outside function: " + myGlobal);
