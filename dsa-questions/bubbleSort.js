var arr = [1, 8, 6, 7, 4, 3];

function bubbleSort(arr, N) {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr, arr.length));
