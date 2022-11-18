var arr = [10, 80, 30, 90, 40, 50, 70];

//Recursive QUICKSORT ALGORITHM

function quickSort(arr, low, hi) {
  if (low < hi) {
    var pi = pivot(arr, low, hi);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, hi);
  }
}

function pivot(arr, low, hi) {
  let pivot = arr[hi];
  let i = low - 1;
  for (let j = low; j < hi; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, hi);
  return i + 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
