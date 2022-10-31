function letterCombinations(digits) {
  var number = digits.split("").map(Number);
  var n = number.length;
  var arr = [];

  if (digits == "") {
    return [];
  }
  cid(number, 0, [], n, arr);
  return arr;
}

var keypad = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
function cid(number, curr, result, n, arr) {
  if (curr == n) {
    var x = result.join("");
    arr.push(x);
    return;
  }
  for (var i = 0; i < keypad[number[curr]].length; i++) {
    result.push(keypad[number[curr]][i]);
    cid(number, curr + 1, result, n, arr);
    result.pop();
  }
  if (number[curr] == 0 || number[curr] == 1) {
    return;
  }
}

console.log(letterCombinations("786"));
