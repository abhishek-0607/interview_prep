var arr = [2, 3, 1, 1, 4];

function minJumps(arr) {
  // Write your code here
  var N = arr.length;

  var dp = Array(N).fill(0);

  if (N == 0 || arr[0] == 0) {
    return Number.MAX_VALUE;
  }
  dp[0] = 0;

  for (var i = 1; i < N; i++) {
    dp[i] = Number.MAX_VALUE;
    for (var j = 0; j < i; j++) {
      if (i <= j + arr[j] && dp[j] != Number.MAX_VALUE) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
        break;
      }
    }
  }
  return dp[N - 1];
}
console.log(minJumps(arr));
