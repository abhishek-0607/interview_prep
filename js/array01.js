var count0 = 0;
var count1 = 0;
var arr = [0, 0, 0, 1, 0, 1, 1];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    count0++;
  } else {
    count1++;
  }
}
for (var j = 0; j < count0; j++) {
  arr[j] = 0;
}
for (var k = 0; k < count1; k++) {
  arr[count0 + k] = 1;
}

console.log(arr);

var low = 0;
var hi = arr.length - 1;
function sort(arr, low, hi) {
  if (low >= hi) {
    return;
  }
  var mid = low + Math.floor((hi - low) / 2);
  if (arr[mid] == 0 && arr[low] == 1) {
    [arr[mid], arr[low]] = [arr[low], arr[mid]];
    low = mid + 1;
  }
}
