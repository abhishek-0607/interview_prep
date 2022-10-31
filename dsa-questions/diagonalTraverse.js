function diagonalTraverse(mat, N) {
  function isValid(i, j) {
    if (i < 0 || i >= N || j >= N || j < 0) {
      return false;
    }
    return true;
  }
  var ans = [];
  for (let k = 0; k < N; k++) {
    var arr = [];

    var i = k;
    var j = 0;
    while (isValid(i, j)) {
      arr.push(mat[i][j]);
      i--;
      j++;
    }

    ans.push(arr);
  }

  for (let k = 1; k < N; k++) {
    var arr = [];
    var i = N - 1;
    var j = k;

    while (isValid(i, j)) {
      arr.push(mat[i][j]);
      i--;
      j++;
    }
    ans.push(arr);
  }
  var output = "";
  for (var i = 0; i < ans.length; i++) {
    if (i % 2 == 0) {
      var d = ans[i].join(" ");
      output = output + d + " ";
    } else {
      ans[i] = ans[i].reverse();
      var d = ans[i].join(" ");
      output = output + d + " ";
    }
  }
  console.log(output);
}
