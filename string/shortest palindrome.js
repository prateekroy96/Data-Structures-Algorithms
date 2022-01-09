var shortestPalindrome = function (s) {
  var lps = longestPrefix(s + "#" + s.split("").reverse().join(""));
  var n = s.length;
  if (lps[lps.length - 1] < n) {
    let str = s.slice(lps[lps.length - 1]);
    return str.split("").reverse().join("").concat(s);
  }
  return s;
};

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
  return table;
}

console.log(shortestPalindrome("aabaaa"));
