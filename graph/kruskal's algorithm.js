function UnionFind(elements) {
  // Number of disconnected components
  this.count = elements.length;
  // Keep Track of connected components
  this.parent = {};
  // Initialize the data structure such that all
  // elements have themselves as parents
  elements.forEach((e) => (this.parent[e] = e));
}

UnionFind.prototype = {
  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    // Roots are same so these are already connected.
    if (rootA === rootB) return;

    // Always make the element with smaller root the parent.
    if (rootA < rootB) {
      if (this.parent[b] != b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] != a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  },

  // Returns final parent of a node
  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  },

  // Checks connectivity of the 2 nodes
  connected(a, b) {
    return this.find(a) === this.find(b);
  },
};

function kruskalsMST(nodes, edges) {
  let edgesSorted = [...edges];
  let MST = [];
  edgesSorted.sort((a, b) => b[2] - a[2]);

  let uf = new UnionFind(nodes);

  // Loop until either we explore all nodes or queue is empty
  while (edgesSorted.length) {
    // Get the edge data using destructuring
    let nextEdge = edgesSorted.pop();

    if (!uf.connected(nextEdge[0], nextEdge[1])) {
      MST.push(nextEdge);
      uf.union(nextEdge[0], nextEdge[1]);
    }
  }
  return MST;
}

var nodes = ["A", "B", "C", "D", "E", "F", "G"];
var edges = [
  ["A", "B", 7],
  ["A", "D", 5],
  ["B", "C", 8],
  ["B", "D", 9],
  ["B", "E", 7],
  ["C", "E", 5],
  ["D", "E", 15],
  ["D", "F", 6],
  ["E", "F", 8],
  ["E", "G", 9],
  ["F", "G", 11],
];
console.log(kruskalsMST(nodes, edges));
