"Time Complexity o(n^2)";

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
insertionSort(arr, arr.length);
console.log(arr);
