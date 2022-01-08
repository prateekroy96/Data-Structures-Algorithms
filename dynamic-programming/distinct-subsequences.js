/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  var se = s.length - 1;
  var te = t.length - 1;
  var map = new Array(se + 1).fill(0).map(() => new Array(te + 1).fill(null));

  function count(s, se, t, te) {
    if (te > se) {
      return 0;
    }
    if (te == -1) {
      return 1;
    }
    if (map[se][te] != null) return map[se][te];

    if (s[se] == t[te]) {
      map[se][te] = count(s, se - 1, t, te - 1) + count(s, se - 1, t, te);
      return map[se][te];
    }
    map[se][te] = count(s, se - 1, t, te);
    return map[se][te];
  }
  let ans = count(s, se, t, te);
  console.log(map);
  return ans;
};

console.log(numDistinct("rabbbit", "rabbit"));
