function max(a, b) {
  return a > b ? a : b;
}
function lcs(X, Y, m, n) {
  if (m == -1 || n == -1) return 0;
  if (X[m] == Y[n]) return 1 + lcs(X, Y, m - 1, n - 1);
  else return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
}
let X = "AGGTAB";
let Y = "GXTXAYB";
console.log(lcs(X, Y, X.length - 1, Y.length - 1));
