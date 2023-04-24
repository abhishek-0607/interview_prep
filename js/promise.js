// console.log(global);
var promise = new Promise(function (resolve, reject) {
  var a = 1;

  if (a == 1) {
    resolve("promise success");
  } else {
    reject("promise failed");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

var arr = [1, 2, 3, 4];
var promises = arr.map((el) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${el}`).then((res) =>
    res.json()
  )
);
Promise.all(promises).then((data) => {
  console.log("abc", data);
});
//   .then((data) => console.log(data));
// console.log("promises", promises);

// console.log("result2", result);
// Promise.all([1, 2, 3, 4]).then();
