function varScopeTest() {
  if (true) {
    var hello = "Hello Inside";
  }
  console.log("outside block: " + hello);
}

varScopeTest();
