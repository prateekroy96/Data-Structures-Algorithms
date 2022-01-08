"Find Kth smallest element in a array";
"Sol.1 Sort and then find Index, O(nlogn)";
"Sol.2 Quick Select";

function quickSelect(list, left, right, k) {
  let pivotIndex = partition(list, left, right);
  if (k == pivotIndex) return list[k];
  else if (k < pivotIndex) right = pivotIndex - 1;
  else left = pivotIndex + 1;

  return quickSelect(list, left, right, k);
}

function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function swap(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
var arr = [3, 4, 7, 1, 8, 6, 5, 9, 2];
for (let x = 1; x <= arr.length; x++)
  console.log(x + "th", quickSelect(arr, 0, 8, x - 1));
