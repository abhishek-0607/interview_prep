// let str = "masai";
// let arr = [...str];
// console.log(arr);
// var a;
// function x() {
//   a = 10;
// }
// console.log(a);

// const arr = new Array(4).fill([]);
// arr[2].push(5);
// console.log(arr);
// let obj = () => {
//   this.a = "pandey";
// };
// obj();
// console.log(a);
const a = 0;
const b = "";
const c = [false];
const outcome = !!(a || b || c || d);

const num = () => {
  let count = 0;
  return () => (count += 1);
};
const num1 = num();
const num2 = num();
console.log(num2(), num1());
