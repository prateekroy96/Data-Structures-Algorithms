"Time Complexity o(nlogn)";

function merge(arr, l, m, r) {
  var L = arr.slice(l, m + 1);
  var R = arr.slice(m + 1, r + 1);

  var i = 0;

  var j = 0;

  var k = l;

  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < L.length) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < R.length) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = Math.floor((l + r) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

var arr = [
  9, 8, 7, 6, 5, 3, 4, 2, 1, 3, 4, 5, 7, 8, 6, 5, 4, 3, 5, 7, 8, 9, 0, 2, 3, 4,
  1, 7, 0, 4, 5, 6, 7, 3, 3, 7, 3, 4, 8, 7, 2, 4, 3, 2, 1, 0,
];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
