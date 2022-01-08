var minCut = function (s) {
  function longestPrefix(str) {
    var table = new Array(str.length);
    var maxPrefix = 0;
    table[0] = 0;

    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        maxPrefix = table[maxPrefix - 1];
      }

      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    console.log(str);
    console.log(table.join(""));
    return table;
  }

  function cuts(start) {
    console.log(start);
    if (start >= s.length) return 0;
    let str = s.slice(start);
    var lps = longestPrefix(str + "#" + str.split("").reverse().join(""));

    if (lps[lps.length - 1] < str.length) {
      return 1 + cuts(start + lps[lps.length - 1]);
    }
    return 0;
  }
  return cuts(0);
};

console.log(minCut("aabaaxx"));
