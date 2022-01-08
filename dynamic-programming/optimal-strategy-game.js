"Optimal Strategy for a Game";
`Consider a row of n coins of values v1 . . . vn, where n is even. 
We play a game against an opponent by alternating turns. 
In each turn, a player selects either the first or last coin from the row, removes it from the row permanently, and receives the value of the coin. 
Determine the maximum possible amount of money we can definitely win if we move first.
Note: The opponent is as clever as the user.`;

function max(a, b) {
  return a > b ? a : b;
}
function min(a, b) {
  return a < b ? a : b;
}

function value(arr, start, end) {
  if (start + 1 == end) return max(arr[start], arr[end]);

  return max(
    arr[start] +
      min(value(arr, start + 2, end), value(arr, start + 1, end - 1)),
    arr[end] + min(value(arr, start, end - 2), value(arr, start + 1, end - 1))
  );
}

console.log(value([8, 15, 3, 7], 0, 3));
