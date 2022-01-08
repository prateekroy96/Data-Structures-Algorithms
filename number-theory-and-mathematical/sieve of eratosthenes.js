"Find all prime numbers before N";

function soe(n) {
  let arr = new Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (!arr[i]) continue;

    for (let j = i ** 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
  let primes = [];
  for (let i = 0; i <= n; i++) {
    if (arr[i]) primes.push(i);
  }
  return primes;
}
console.log(soe(10));
