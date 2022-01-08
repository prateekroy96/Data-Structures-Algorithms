function backtrack(board, row) {
  if (row === n) {
    return true;
  }

  for (let col = 0; col < n; col++) {
    if (check(row, col)) {
      board[row][col] = "Q";
      if (backtrack(board, row + 1)) {
        return true;
      }
      board[row][col] = "";
    }
  }
  return false;
}
backtrack(0);
