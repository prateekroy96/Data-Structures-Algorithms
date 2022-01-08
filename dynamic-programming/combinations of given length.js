function combination(arr, start, k) {
  // base cases
  if (arr.length - start < k) return [];
  if (k == 0) return [[]];

  // include the current element
  var include = combination(arr, start + 1, k - 1).map((elem) => [
    arr[start],
    ...elem,
  ]);

  // exclude the current element
  // exclude from all future combinations
  let startExclude = start + 1;
  while (arr[startExclude] == arr[start]) startExclude++;
  var exclude = combination(arr, startExclude, k);

  return [...include, ...exclude];
}

var arr = [1, 2, 3, 3, 4];

// sorting necessary for excluding algorithm to work
arr.sort((a, b) => a - b);
console.log(combination([1, 2, 3, 3, 4], 0, 2));
