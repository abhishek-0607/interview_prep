function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
displayName();

init();

// A closure is the combination of a function bundled together(enclosed) with references to its surrounding
// state(the lexical environment).In other words,
// a closure gives you access to an outer function's scope from an inner function. In JavaScript,
// closures are created every time a function is created, at function creation time.

// emulating private methods with closures

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

var person = {
  name: "masai",
  arrowFunc: () => {
    console.log(this.name);
  },
  func: function () {
    console.log(this.name);
  },
};

//Prototypes
