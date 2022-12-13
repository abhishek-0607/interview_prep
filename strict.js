// "use strict";
// function sum(a, a) {
//   console.log(add);
//   var add = a + 20;
//   console.log(add);
// }
// sum(10, 10);
// var arr = [2, 3, 1, 1, 4];

function gcd(a, b) {
  if (a == 0 && b == 0) {
    return 0;
  }
  if (a == 0) {
    return b;
  }
  if (b == 0) {
    return a;
  }
  if (a == b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
}

var z = [4, 6];
function findShortestPath(arr) {
  var [x, y] = arr.map(Number);

  if (x == y) {
    return 0;
  }

  if (y % x == 0) {
    return 1;
  }
  var hcf = gcd(x, y);
  if (hcf == 1 || hcf != x) {
    return 2;
  }
}

console.log(findShortestPath(z));
