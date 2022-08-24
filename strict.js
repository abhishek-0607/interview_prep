// "use strict";
// function sum(a, a) {
//   console.log(add);
//   var add = a + 20;
//   console.log(add);
// }
// sum(10, 10);
// var arr = [2, 3, 1, 1, 4];

// function minJumps(arr) {
//   // Write your code here
//   var N = arr.length;

//   var dp = Array(N).fill(0);

//   if (N == 0 || arr[0] == 0) {
//     return Number.MAX_VALUE;
//   }
//   dp[0] = 0;

//   for (var i = 1; i < N; i++) {
//     dp[i] = Number.MAX_VALUE;
//     for (var j = 0; j < i; j++) {
//       if (i <= j + arr[j] && dp[j] != Number.MAX_VALUE) {
//         dp[i] = Math.min(dp[i], dp[j] + 1);
//         break;
//       }
//     }
//   }
//   return dp[N - 1];
// }
// console.log(minJumps(arr));

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
