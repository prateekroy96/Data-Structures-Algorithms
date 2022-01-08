// Construct a table with table[i] as the length of the longest prefix of the substring 0..i
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

function kmpMatching(str, pattern) {
  // find the prefix table in O(n)
  var prefixes = longestPrefix(pattern);
  var matches = [];

  var j = 0;
  var i = 0;
  while (i < str.length) {
    if (str.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      matches.push(i - j);
      j = prefixes[j - 1];
    } else if (str.charAt(i) !== pattern.charAt(j)) {
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

console.log(kmpMatching("abc111abc", "abc"));
