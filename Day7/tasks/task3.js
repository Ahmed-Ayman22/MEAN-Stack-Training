function strictDeleteTest() {
  "use strict";
  var localVar = "test";

  var obj = { property: "value" };
  delete obj.property;
  console.log(obj);
}

strictDeleteTest();
