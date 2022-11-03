// Given an array of integers arr[] of size N and an integer,
//  the task is to rotate the array elements to the right by d positions.

var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 2;
var temp = [];
for (var i = 0; i < arr.length; i++) {
  if (i < k) {
    temp.push(arr[arr.length - k + i]);
  } else {
    temp.push(arr[i - k]);
  }
}
console.log(temp);

// juggling algorithm

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
