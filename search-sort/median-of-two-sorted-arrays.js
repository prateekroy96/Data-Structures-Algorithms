function Median(A, B) {
  let n = A.length;
  let m = B.length;
  if (n > m) return Median(B, A); // Swapping to make A smaller

  let start = 0;
  let end = n;
  let realmidinmergedarray = Math.floor((n + m + 1) / 2);

  while (start <= end) {
    let mid = (start + end) >> 1;
    let leftAsize = mid;
    let leftBsize = realmidinmergedarray - mid;

    let leftA = leftAsize > 0 ? A[leftAsize - 1] : -Infinity; // checking overflow of indices
    let leftB = leftBsize > 0 ? B[leftBsize - 1] : -Infinity;
    let rightA = leftAsize < n ? A[leftAsize] : Infinity;
    let rightB = leftBsize < m ? B[leftBsize] : Infinity;
    console.log(leftAsize, leftA, leftBsize, leftB);
    // if correct partition is done
    if (leftA <= rightB && leftB <= rightA) {
      if ((m + n) % 2 == 0)
        return Math.floor(
          (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0
        );
      return Math.max(leftA, leftB);
    } else if (leftA > rightB) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return 0.0;
}

// Driver code
let arr1 = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let arr2 = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log(Median(arr1, arr2));
