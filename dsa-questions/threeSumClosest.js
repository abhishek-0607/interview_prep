function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  var min = +Infinity;
  var ans = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let hi = nums.length - 1;
    while (low < hi) {
      var temp = nums[i] + nums[low] + nums[hi];
      if (Math.abs(target - temp) < min) {
        ans = temp;
        min = Math.abs(target - temp);
      }
      if (temp == target) {
        return target;
      } else if (temp > target) {
        hi--;
      } else {
        low++;
      }
    }
  }
  return ans;
}
