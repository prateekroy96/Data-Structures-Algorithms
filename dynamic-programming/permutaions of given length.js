function permutations(arr, length) {
  // base cases
  if (arr.length == 0) return [[]];
  if (length == 0) return [[]];

  // map to keep track of repeating elements
  const map = {};

  // solution array
  var ans = [];

  for (let i = 0; i < arr.length; i++) {
    // skip if repeated elements
    if (map[arr[i]]) continue;

    map[arr[i]] = true;

    let _arr = [...arr];
    _arr.splice(i, 1);

    // permutations of array without the ith element
    // followed by adding the element at start
    let _permutations = permutations(_arr, length - 1).map((x) => [
      arr[i],
      ...x,
    ]);

    ans.push(..._permutations);
  }

  return ans;
}

console.log(permutations([1, 3, 3, 4], 4));
