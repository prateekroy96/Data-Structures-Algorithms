/**
 * @param {number[][]} image
 * @param {number} sr select row
 * @param {number} sc selected column
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  var color = image[sr][sc];
  var m = image.length;
  var n = image[0].length;
  var visited = new Array(m).fill(0).map((_) => new Array(n).fill(false));

  function check(i, j) {
    if (i >= 0 && i < m && j >= 0 && j < n && image[i][j] == color) return true;
    return false;
  }

  function fill(i, j) {
    if (check(i, j) && !visited[i][j]) {
      image[i][j] = newColor;
      visited[i][j] = true;
      fill(i + 1, j);
      fill(i - 1, j);
      fill(i, j - 1);
      fill(i, j + 1);
    }
  }

  fill(sr, sc);

  return image;
};
