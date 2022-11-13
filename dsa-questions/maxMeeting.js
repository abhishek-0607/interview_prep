// JavaScript program to find maximum number of meetings

// Function for finding maximum meeting in one room
function maxMeetings(s, f, n) {
  //Make an Array : arr like [[index, startTime, endTime]]
  //index will be stored as i + 1, to start indices from 1.
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    var aNew = [];
    aNew.push(i + 1);
    aNew.push(s[i]);
    aNew.push(f[i]);
    arr.push(aNew);
  }

  //array sorted based on end Time
  arr.sort((a, b) => a[2] - b[2]);

  //endTime is at 2nd index of subarray inside arr
  var endTime = arr[0][2];

  //result will contain the indices of meetings
  var result = [];

  //first meeting will be bydefault push as array is already sorted
  result.push(arr[0][0]);

  //will compare if next startTime > prev endTime
  for (var k = 1; k < arr.length; k++) {
    var startTime = arr[k][1];
    if (startTime >= endTime) {
      result.push(arr[k][0]);
      count++;
      endTime = arr[k][2];
    }
  }

  //If we need to return indices then will return : result
  //or else if we need to return number of meetings then will return result.length
  return result;
}

// Starting time
let s = [1, 3, 0, 5, 8, 5];

// Finish time
let f = [2, 4, 6, 7, 9, 9];

// Number of meetings.
let n = s.length;

// Function call
maxMeetings(s, f, n);
