var str1 = "geeksforgeeks";
var str2 = "forgeeksgeeks";
function checkAnagram(str1, str2) {
  var obj1 = {};
  var obj2 = {};
  if (str1.length != str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] == undefined) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
  }
  for (var i = 0; i < str2.length; i++) {
    if (obj2[str2[i]] == undefined) {
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]]++;
    }
  }

  for (var k in obj1) {
    if (obj1[k] != obj2[k]) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram(str1, str2));

function isAnagram(str1, str2) {
  // code here
  var obj = {};

  if (str1.length != str2.length) {
    return false;
  }
  for (var i = 0; i < str1.length; i++) {
    if (obj[str1[i]] == undefined) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]]++;
    }
  }
  for (var i = 0; i < str2.length; i++) {
    if (obj[str2[i]] == undefined) {
      return false;
    } else {
      obj[str2[i]]--;
    }
  }

  for (var k in obj) {
    if (obj[k] != 0) {
      return false;
    }
  }

  return true;
}
