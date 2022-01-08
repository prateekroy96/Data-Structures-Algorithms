function sum(...val) {
  console.log(this);
  let sum = 0;
  for (let num of val) {
    sum += num;
  }
  return sum;
}

console.log(sum.apply({ num: 4 }, [1, 2, 3, 4, 5]));
console.log(sum.call({ num: 4 }, ...[1, 2, 3, 4, 5]));

//------------------------------------------------------
// FUNCTION CURRYING
//------------------------------------------------------

sumWith10 = sum.bind({ num: 3 }, 10);
console.log(sumWith10(1, 2, 3, 4, 5));
