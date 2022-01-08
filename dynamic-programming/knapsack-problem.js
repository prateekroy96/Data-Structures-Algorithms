// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively.
// Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W.
// You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

function max(a, b) {
  return a > b ? a : b;
}
function min(a, b) {
  return a < b ? a : b;
}

function maxValue(values, weights, index, max_weight) {
  if (index < 0) return 0;
  if (max_weight - weights[index] >= 0)
    return max(
      values[index] +
        maxValue(values, weights, index - 1, max_weight - weights[index]),
      maxValue(values, weights, index - 1, max_weight)
    );
  else return maxValue(values, weights, index - 1, max_weight);
}

console.log(maxValue([160, 100, 120], [10, 20, 30], 2, 50));
