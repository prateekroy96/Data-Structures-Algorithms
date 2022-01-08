function subsets(arr, n) {
  if (n == 0) return [[]];

  var oldSubsets = [...subsets(arr, n - 1)];
  var newSubsets2 = [];
  for (let item of oldSubsets) {
    newSubsets2.push(item);
    newSubsets2.push([...item, arr[n - 1]]);
  }
  return newSubsets2;
}

console.log(subsets([1, 2, 3], 3));
