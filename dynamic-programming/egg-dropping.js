/**
 * @param {number} k number of eggs
 * @param {number} n number of floors
 */
var superEggDrop = function (k, n) {
  var map = new Array(n + 1).fill(0).map((_) => new Array(k + 1).fill(0));

  function throws(k, n) {
    if (map[n][k]) return map[n][k];

    // for 0 or 1 floor
    if (n == 1 || n == 0) {
      map[n][k] = n;
      return map[n][k];
    }

    // for 1 egg
    if (k == 1) {
      map[n][k] = n;
      return map[n][k];
    }

    // minimum of all eggs
    let min = Infinity;
    for (let i = 1; i <= n; i++) {
      min = Math.min(min, Math.max(throws(k, n - i), throws(k - 1, i - 1)) + 1);
    }

    map[n][k] = min;
    return map[n][k];
  }

  let ans = throws(k, n);
  return ans;
};
console.log(superEggDrop(5, 10));
