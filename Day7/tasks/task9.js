function blockScopeTest() {
  if (true) {
    let tryLet = "trying let";
    const tryConst = "trying const";
    console.log(tryLet, tryConst);
  }
}

blockScopeTest();
