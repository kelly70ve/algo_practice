// My Solution

var removeDuplicates = function (nums) {
  var remove = [];
  for (i = 0; i < nums.length; i++) {
    var j = i + 1;
    if (nums[i] === nums[j]) {
      remove.push(i);
    }
  }
  for (i = remove.length - 1; i > -1; i--) {
    nums.splice(remove[i], 1);
  }
  return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// LEETCODE ANSWER

function removeDuplicatesTwo(nums) {
  if (nums.length == 0) return 0;
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesTwo([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
