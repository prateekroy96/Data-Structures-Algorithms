var rotate = function (matrix) {
  let n = matrix[0].length;
  rot(matrix, 0, n);
  console.log(matrix);
};

function rot(matrix, offset, n) {
  if (offset == Math.floor(n / 2)) return;
  let i = offset;
  for (let j = offset; j < n - offset - 1; j++) {
    [
      matrix[i][j],
      matrix[j][n - i - 1],
      matrix[n - i - 1][n - j - 1],
      matrix[n - j - 1][i],
    ] = [
      matrix[n - j - 1][i],
      matrix[i][j],
      matrix[j][n - i - 1],
      matrix[n - i - 1][n - j - 1],
    ];
  }

  rot(matrix, ++offset, n);
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
