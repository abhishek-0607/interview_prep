const fs = require("fs");
const axios = require("axios");
const _ = require("lodash");

fs.writeFile("input.txt", "Hey there!!!", function (err, data) {
  if (err) {
    return;
  }
});
fs.readFile("input.txt", function (err, data) {
  if (err) {
    return;
  }
  console.log(data.toString());
});

axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  console.log(res.data);

  fs.writeFile(
    "input.txt",
    JSON.stringify(res.data),
    "utf8",
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    }
  );
  // res.data.forEach((item, index) => {
  //   fs.writeFile("input.txt", JSON.stringify(item), function (err) {
  //     if (err) {
  //       return console.log(err);
  //     }
  //   });
  // });
});

fs.readFile("input.txt", function (err, data) {
  if (err) {
    return;
  }
  console.log(data.toString());
});

console.log(_.chunk([1, 2, 3, 4, 5], 2));
