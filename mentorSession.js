var arr = [1, 2, 3, 4, 5];
const x = arr.forEach(function (e) {
  return e;
});
console.log(x);
var z = arr.map(function (e) {
  return 2 * e;
});
console.log(z);

function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
var arr = [1, 2, 2, 3, 4, 4, 5, 2, 4];
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
// var obj = {};
// for (var i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]]++;
//   }
// }

// var prev = 0;
// var curr = 1;
// var new_arr = [];
// while (curr <= arr.length) {
//   if (arr[curr] != arr[prev]) {
//     new_arr.push(arr[prev]);
//     prev = curr;
//   }
//   curr++;
// }

// console.log(new_arr);
