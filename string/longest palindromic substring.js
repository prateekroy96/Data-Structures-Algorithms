var longestPalindrome = function (s) {
  return _longestPalindrome(s, 0, s.length - 1).value;
};
var cache = {};
function _longestPalindrome(s, start, end) {
  if (cache[start + " " + end]) return cache[start + " " + end];

  //   console.log(start, end, s[start], s[end], start == end);
  if (start > end) {
    cache[start + " " + end] = { fullStr: true, value: "" };
    return { fullStr: true, value: "" };
  }
  //   console.log("+");
  if (start == end) {
    cache[start + " " + end] = { fullStr: true, value: s[start] };
    return { fullStr: true, value: s[start] };
  }
  if (s[start] == s[end]) {
    let res = _longestPalindrome(s, start + 1, end - 1);
    if (res.fullStr) {
      cache[start + " " + end] = {
        fullStr: true,
        value: s[start] + res.value + s[end],
      };
      return {
        fullStr: true,
        value: s[start] + res.value + s[end],
      };
    }
  }
  //   console.log("+++");
  let v1 = _longestPalindrome(s, start + 1, end).value;
  let v2 = _longestPalindrome(s, start, end - 1).value;
  cache[start + " " + end] = {
    fullStr: false,
    value: max(v1, v2),
  };
  return {
    fullStr: false,
    value: max(v1, v2),
  };
}

function max(a, b) {
  return a.length > b.length ? a : b;
}
console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"));
