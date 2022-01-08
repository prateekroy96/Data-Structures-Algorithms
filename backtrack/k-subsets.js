/**
 * @param start index in nums
 * @param nums initial array of elements
 * @param sums sum total of each set
 */
function canPartitionKSubsets(start, nums, sums) {
  if (isComplete(sums)) return true;
  if (start == nums.length) return false;

  for (let i = 0; i < k; i++) {
    if (sums[i] < nums[start]) continue;

    sums[i] -= nums[start];
    if (canPartitionKSubsets(start + 1, nums, sums)) return true;
    sums[i] += nums[start];
  }
  return false;
}
