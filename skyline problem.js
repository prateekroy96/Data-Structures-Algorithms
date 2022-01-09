var getSkyline = function (buildings) {
  const [l, r] = [0, buildings.length - 1];
  const [diag, rec, merge] = [
    ([l, r, h]) => [
      [l, h],
      [r, 0],
    ],
    (l, r) => {
      if (l === r) return diag(buildings[l]);
      const m = (l + r) >> 1;
      return merge(rec(l, m), rec(m + 1, r));
    },
    (s1, s2) => {
      const res = [];
      let [prev, prev1, prev2, i, j] = [-1, 0, 0, 0, 0];
      const add = ([x, y]) => {
        (!res.length || y != prev) && res.push([x, y]);
        prev = y;
      };
      while (i < s1.length && j < s2.length) {
        let x, y;
        const [[x1, y1], [x2, y2]] = [s1[i], s2[j]];
        x1 < x2 && ([x, y] = [x1, Math.max(y1, prev2)]);
        x2 < x1 && ([x, y] = [x2, Math.max(y2, prev1)]);
        x1 === x2 && ([x, y] = [x1, Math.max(y1, y2)]);
        add([x, y]);
        if (x1 <= x2) {
          prev1 = y1;
          i++;
        }
        if (x2 <= x1) {
          prev2 = y2;
          j++;
        }
      }
      const leftovers = i === s1.length ? s2.slice(j) : s1.slice(i);
      while (leftovers.length) add(leftovers.splice(0, 1)[0]);
      return res;
    },
  ];
  return rec(l, r);
};
