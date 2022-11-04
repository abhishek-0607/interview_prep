// Given an array of integers arr[] of size N and an integer,
//  the tasd is to rotate the array elements to the right by d positions.

var arr = [1, 2, 3, 4, 5, 6, 7];
var d = 2;
// var temp = [];
// for (var i = 0; i < arr.length; i++) {
//   if (i < d) {
//     temp.push(arr[arr.length - d + i]);
//   } else {
//     temp.push(arr[i - d]);
//   }
// }
// console.log(temp);

// juggling algorithm

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
d = d % arr.length;

for (let i = 0; i < gcd(d, arr.length); i++) {
  let temp = arr[i];
  let j = i;
  while (1) {
    let k = j + d;
    if (k >= arr.length) k = k - arr.length;
    if (k == i) break;

    arr[j] = arr[k];
    j = k;
  }
  arr[j] = temp;
}
console.log(arr);
