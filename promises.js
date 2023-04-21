const cart = ["shoes", "shirt", "pant", "kurta"];

// createOrder(cart);

// proceedToPayment(orderId);

// //using callbacks

// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });

//Promises
//whenever js enigine exicute this line it's
//create a empty data { data: undefined } then when it will fulfilled it filled the object { data }

// const URL = "https://api.github.com/users/akshaymarch7";
// const user = fetch(URL);
// console.log(user);
// user.then((res) => {
//   console.log(res);
// });

// creating Promise object
var myPromise = new Promise(function (resolve, reject) {
  const number1 = 2;
  const number2 = 1;
  // comparing two numbers
  if (number1 === number2) {
    // Operation successful
    resolve("resolved");
  } else {
    // Error occurred
    reject("aaa");
  }
});
// Use Promise object
myPromise
  .then(function () {
    console.log("Numbers Equal. Success");
  })
  .catch(function () {
    console.log("Error");
  });

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

// processUserInput(greeting);

//example of promise
const sleep = (time) => {
  return new Promise((res, rej) => {
    if (typeof time !== "number") {
      rej("argument is not a number");
    }
    setTimeout(() => {
      res(`sleep in ${time / 1000}sec`);
    }, time);
  });
};
// Parallel requests
function parallel() {
  return Promise.all([
    sleep(100),
    sleep(500)
      .then((res) => {
        throw new Error("error message");
      })
      .catch((err) => err),
    sleep(1000),
    sleep(3000),
  ])
    .then((res) => res)
    .catch((err) => err);
}
// parallel().then((res) => console.log(res));

async function test1() {
  console.log("SEQUENCIAL START");
  let res1 = await sleep(3000);
  console.log(res1, 1);
  let res2 = await sleep(1000);
  console.log(res2, 2);
}
test1();
async function test2() {
  console.log("CONCURRENT START");
  let res1 = await sleep(3000);
  let res2 = await sleep(1000);
  console.log(res1, 3);
  console.log(res2, 4);
}

test2();

// Example
var arr = [1, 2, 3, 4];
var promises = arr.map((el) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${el}`).then((res) =>
    res.json()
  )
);
Promise.all(promises).then((data) => {
  console.log("abc", data);
});
