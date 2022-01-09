var minCut = function (s) {
  var map = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(null));
  var isPalindrome = function (start, end) {
    if (start >= end) {
      map[start][end] = true;
      return true;
    }
    if (map[start][end] != null) return map[start][end];

    isPalindrome(start + 1, end);
    isPalindrome(start, end - 1);
    if (s[start] == s[end]) {
      map[start][end] = isPalindrome(start + 1, end - 1);
    } else {
      map[start][end] = false;
    }

    return map[start][end];
  };

  isPalindrome(0, s.length - 1);

  console.time("dp");
  let dp = new Array(s.length).fill(null);
  dp[0] = 0;

  function cuts(end) {
    if (dp[end] != null) return dp[end];
    if (map[0][end]) {
      dp[end] = 0;
      return dp[end];
    }
    let min = Infinity;
    for (let i = 1; i <= end; i++) {
      if (map[i][end]) min = Math.min(min, cuts(i - 1) + 1);
    }
    dp[end] = min;
    return min;
  }
  cuts(s.length - 1);

  // for (let i = 1; i < dp.length; i++) {
  //   let min = Infinity;
  //   for (let j = i; j >= 1; j--) {
  //     // console.log()
  //     if (map[j][i]) {
  //       min = Math.min(min, dp[j - 1]);
  //     }
  //   }
  //   if (map[0][i]) {
  //     dp[i] = 0;
  //   } else {
  //     dp[i] = min + 1;
  //   }
  // }

  console.timeEnd("dp");
  return dp.pop();
};

let ans = minCut(
  "apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp"
);
console.log(ans);
