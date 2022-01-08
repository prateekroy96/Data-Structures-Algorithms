function backtrack(board, index) {
  if (index === 81) {
    return true;
  }
  const row = Math.floor(index / 9);
  const col = index % 9;
  if (board[row][col] === ".") {
    for (let i = 0; i < digits.length; i++) {
      if (fit(row, col, digits[i])) {
        board[row][col] = digits[i];
        if (backtrack(index + 1)) {
          return true;
        }
        board[row][col] = ".";
      }
    }
    return false;
  } else {
    return backtrack(index + 1);
  }
}
backtrack(0);
