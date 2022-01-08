var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  if (n > m) return findMedianSortedArrays(nums2, nums1); // Swapping to make A smaller

  let start = 0;
  let end = n;
  let realmid = (n + m + 1) >> 1;

  while (start <= end) {
    let mid = (start + end) >> 1;
    let leftAsize = mid;
    let leftBsize = realmid - mid;

    let leftA = leftAsize > 0 ? nums1[leftAsize - 1] : -Infinity; // checking overflow of indices
    let leftB = leftBsize > 0 ? nums2[leftBsize - 1] : -Infinity;
    let rightA = leftAsize < n ? nums1[leftAsize] : Infinity;
    let rightB = leftBsize < m ? nums2[leftBsize] : Infinity;

    if (leftA <= rightB && leftB <= rightA) {
      if ((m + n) % 2 == 0)
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0;
      return Math.max(leftA, leftB);
    } else if (leftA > rightB) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return 0.0;
};
