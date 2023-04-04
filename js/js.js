for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
console.log("" || null || 0);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3));
