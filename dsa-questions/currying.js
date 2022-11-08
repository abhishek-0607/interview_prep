function sum(a) {
  return function (b) {
    if (b) {
      return sum(a * b);
    }
    return a;
  };
}
var x = sum(1)(2)(3)(5)();
console.log(x);
