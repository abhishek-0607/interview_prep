var arr = [1, 8, 6, 7, 4, 3];

function selectionSort(arr, N) {
  for (var i = 0; i < N; i++) {
    max = i;
    for (var j = 0; j < N; j++) {
      if (arr[max] < arr[j]) {
        max = j;
      }
      [arr[max], arr[i]] = [arr[i], arr[max]];
    }
  }
  return arr;
}

console.log(selectionSort(arr, arr.length));
