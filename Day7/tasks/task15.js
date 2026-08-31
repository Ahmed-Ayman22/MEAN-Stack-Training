const handlers = {};

for (let i = 0; i < 3; i++) {
  handlers["fn" + i] = function () {
    return "index: " + i;
  };
}

console.log(handlers.fn0());
console.log(handlers.fn2());
