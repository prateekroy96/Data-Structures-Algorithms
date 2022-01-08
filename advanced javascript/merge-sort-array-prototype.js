// function MyArray(...args) {
//   this.arr = Array(...args);
// }
// MyArray.prototype.last = function () {
//   return this.arr[this.array.length - 1];
// };
// console.log(
//   new Array(4, 2, 1).sort((a, b) => a - b).reduce((a, v) => a + v),
//   new MyArray(4, 2, 1).last()
// );

Array.prototype.last = function () {
  return this[this.length - 1];
};

a = new Array(1, 2, 3);
console.log(a.push(4, 5, 6), a, a.last());
