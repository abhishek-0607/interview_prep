const arr = [38, 27, 43, 3, 9, 82, 10];

function mergeSort(low, hi, arr) {
  if (low >= hi) {
    return;
  }
  var mid = low + Math.floor((hi - low) / 2);
  mergeSort(low, mid, arr);
  mergeSort(mid + 1, hi, arr);
  merge(arr, low, mid, hi);
}

function merge(arr, l, mid, r) {
  var n1 = mid - l + 1;
  var n2 = r - mid;

  var L = new Array(n1);
  var R = new Array(n2);
  for (var i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }
  i = 0;
  j = 0;
  var k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

mergeSort(0, arr.length - 1, arr);
console.log(arr);
