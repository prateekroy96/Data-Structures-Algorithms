// Number of ways to cover a distance given step sizes

// distance n

// steps = [1,2,3]

var steps = [1, 2, 3];
var i = 0;
function ways(n) {
  console.log(++i, n);
  if (n < 0) return 0;
  if (n == 0) return 1;
  let ways_res = 0;
  for (let step of steps) {
    // console.log(step, steps);
    ways_res += ways(n - step);
  }
  return ways_res;
}

console.log(ways(3));
