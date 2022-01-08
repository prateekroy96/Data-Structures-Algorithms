var lengthOfLongestSubstring = function (s) {
  var max = 0;
  var initialIndex = {};
  let start = 0;
  let end = 0;
  while (end < s.length) {
    console.log("BEG", start, end);
    let char = s[end];
    if (initialIndex[char] == undefined) {
      initialIndex[char] = end;
      end++;

      max = bigger(max, end - start);
      console.log("END", start, end, max);
    } else {
      start = bigger(start, initialIndex[char] + 1);
      initialIndex[char] = end;
      end++;

      max = bigger(max, end - start);
      console.log("END", start, end, max);
    }
  }
  return max;
};

function bigger(a, b) {
  return a > b ? a : b;
}

console.log(lengthOfLongestSubstring("abcdeeedchfba"));
