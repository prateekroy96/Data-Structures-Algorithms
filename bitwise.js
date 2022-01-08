// AND
console.log(0 & 0, 1 & 0, 0 & 1, 1 & 1);

// OR
console.log(0 | 0, 1 | 0, 0 | 1, 1 | 1);

// XOR
console.log(0 ^ 0, 1 ^ 0, 0 ^ 1, 1 ^ 1);

// // Negation
// console.log(~1, ~0);

// Decimal to binary and vice versa
console.log((1234).toString(2));
console.log((0b10010100011).toString(10));
console.log(parseInt("10010100011", 2));

// Bitwise operation with larger numbers
// 010 = 2
// 110 = 6
// operations happen on each corresponding digit
console.log(2 | 6, 2 & 6, 2 ^ 6);

// shift operator
console.log(9 << 2); // 1001 to 100100
console.log(9 >> 2); // 1001 to 10

// bitwise not
console.log(~0, ~1, ~2, ~3); // only works upto 32 bit integers
