let max_ref;

// Max length increasing subsequence ending at i
// L(i) = 1 + max( L(j) ) where 0 < j < i and arr[j] < arr[i]; or
// L(i) = 1, if no such j exists.
function _lis(arr, n) {
  if (n == 1) return 1;
  let res,
    max_ending_here = 1;
  for (let i = 1; i < n; i++) {
    res = _lis(arr, i);
    if (arr[i - 1] < arr[n - 1] && res + 1 > max_ending_here)
      max_ending_here = res + 1;
  }
  if (max_ref < max_ending_here) max_ref = max_ending_here;
  return max_ending_here;
}

function lis(arr, n) {
  max_ref = 1;
  _lis(arr, n);
  return max_ref;
}

// driver program to test above functions
let arr = [10, 22, 9, 33, 21, 50, 41, 60];
arr = [1, 2, 3, 4, 5, 6, 1];
let n = arr.length;
console.log("Length of lis is " + lis(arr, n));
