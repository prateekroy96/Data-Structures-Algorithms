"Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum.";

var solutions = [];

function subsetSum(arr, sum) {
  console.log(arr, sum);
  if (sum == 0) return [];
  if (sum < 0) return false;
  if (arr.length == 0) return false;
  let i = arr.length - 1;

  let small_arr = [...arr];
  small_arr.splice(i, 1);
  let isIncluded = subsetSum(small_arr, sum - arr[i]);
  if (isIncluded) return [...isIncluded, arr[i]];

  let isNotIncluded = subsetSum(small_arr, sum);
  if (isNotIncluded) return [...isNotIncluded];

  return false;
}

console.log(subsetSum([3, 34, 4, 12, 5, 2], 36));
