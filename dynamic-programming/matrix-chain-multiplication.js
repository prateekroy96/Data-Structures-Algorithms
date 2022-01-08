"For a matrix chain multiplication (A1.A2.A3...An). Find the minimum/maximum computations to calculate the product.";
"Computation cost (CC) of A_lm . A_mn = l*m*n";
"Input: [[10,100],[100,5],[5,50]]";

function minScalarProducts(arr, start, end) {
  if (start == end) return 0;
  //if (start + 1 == end) return arr[start][0] * arr[start][1] * arr[end][1];

  let minCost = Infinity;
  for (let i = 0; i < end - start; i++) {
    let newMinCost =
      minScalarProducts(arr, start, start + i) +
      minScalarProducts(arr, start + i + 1, end) +
      arr[start + i][0] * arr[start + i][1] * arr[end][1];
    if (minCost > newMinCost) {
      minCost = newMinCost;
    }
  }

  return minCost;
}

function maxScalarProducts(arr, start, end) {
  if (start == end) return 0;
  //if (start + 1 == end) return arr[start][0] * arr[start][1] * arr[end][1];

  let maxCost = 0;
  for (let i = 0; i < end - start; i++) {
    let newMaxCost =
      maxScalarProducts(arr, start, start + i) +
      maxScalarProducts(arr, start + i + 1, end) +
      arr[start + i][0] * arr[start + i][1] * arr[end][1];
    if (maxCost < newMaxCost) {
      maxCost = newMaxCost;
    }
  }

  return maxCost;
}

console.log(
  maxScalarProducts(
    [
      [10, 10],
      [10, 5],
      [5, 50],
      [50, 150],
      [150, 10],
    ],
    0,
    4
  ),
  minScalarProducts(
    [
      [10, 10],
      [10, 5],
      [5, 50],
      [50, 150],
      [150, 10],
    ],
    0,
    4
  )
);
