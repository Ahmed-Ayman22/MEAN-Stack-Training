function strictTest() {
  "use strict";
  try {
    strictGlobalVar = "I will fail";
  } catch (err) {
    console.log("strict mode error: " + err.message);
  }
}

strictTest();
