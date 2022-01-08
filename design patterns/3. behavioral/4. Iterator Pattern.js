const items = [1, "hello", false, 99.8];

function Iterator(items) {
  this.items = items;
  this.index = 0; // to start from beginning position of array
}

Iterator.prototype = {
  // returns true if a next element is available
  hasNext: function () {
    return this.index < this.items.length;
  },
  //returns next element
  next: function () {
    return this.items[this.index++];
  },
};

//Instantiate object for Iterator
const iterator = new Iterator(items);
while (iterator.hasNext()) {
  console.log(iterator.next());
}
