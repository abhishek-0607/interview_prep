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
const URL = "https://api.github.com/users/akshaymarch7";
const user = fetch(URL);
console.log(user);
user.then((res) => {
  console.log(res);
});

// creating Promise object
var myPromise = new Promise(function (resolve, reject) {
  const number1 = 2;
  const number2 = 2;
  // comparing two numbers
  if (number1 === number2) {
    // Operation successful
    resolve();
  } else {
    // Error occurred
    reject();
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

processUserInput(greeting);
