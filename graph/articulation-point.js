class Graph {
  // Constructor
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    this.NIL = -1;
    this.time = 0;
    for (let i = 0; i < v; ++i) this.adj[i] = [];
  }

  //Function to add an edge into the graph
  addEdge(v, w) {
    this.adj[v].push(w); // Add w to v's list.
    this.adj[w].push(v); //Add v to w's list
  }

  // A recursive function that find articulation points using DFS
  // u --> The vertex to be visited next
  // visited[] --> keeps track of visited vertices
  // disc[] --> Stores discovery times of visited vertices
  // parent[] --> Stores parent vertices in DFS tree
  // ap[] --> Store articulation points
  APUtil(u, visited, disc, low, parent, ap) {
    // Count of children in DFS Tree
    let children = 0;

    // Mark the current node as visited
    visited[u] = true;

    // Initialize discovery time and low value
    disc[u] = low[u] = ++this.time;

    // Go through all vertices adjacent to this

    for (let i of this.adj[u]) {
      let v = i; // v is current adjacent of u

      // If v is not visited yet, then make it a child of u
      // in DFS tree and recur for it
      if (!visited[v]) {
        children++;
        parent[v] = u;
        this.APUtil(v, visited, disc, low, parent, ap);

        // Check if the subtree rooted with v has a connection to
        // one of the ancestors of u
        low[u] = Math.min(low[u], low[v]);

        // u is an articulation point in following cases

        // (1) u is root of DFS tree and has two or more children.
        if (parent[u] == this.NIL && children > 1) ap[u] = true;

        // (2) If u is not root and low value of one of its child
        // is more than discovery value of u.
        if (parent[u] != this.NIL && low[v] >= disc[u]) ap[u] = true;
      }

      // Update low value of u for parent function calls.
      else if (v != parent[u]) low[u] = Math.min(low[u], disc[v]);
    }
  }

  // The function to do DFS traversal. It uses recursive function APUtil()
  AP() {
    // Mark all the vertices as not visited
    let visited = new Array(this.V);
    let disc = new Array(this.V);
    let low = new Array(this.V);
    let parent = new Array(this.V);
    let ap = new Array(this.V); // To store articulation points

    // Initialize parent and visited, and ap(articulation point)
    // arrays
    for (let i = 0; i < this.V; i++) {
      parent[i] = this.NIL;
      visited[i] = false;
      ap[i] = false;
    }

    // Call the recursive helper function to find articulation
    // points in DFS tree rooted with vertex 'i'
    for (let i = 0; i < this.V; i++)
      if (visited[i] == false) this.APUtil(i, visited, disc, low, parent, ap);

    // Now ap[] contains articulation points, print them
    for (let i = 0; i < this.V; i++) if (ap[i] == true) console.log(i + " ");
  }
}

// Driver method
// Create graphs given in above diagrams
console.log("Articulation points in first graph");
let g1 = new Graph(5);
g1.addEdge(1, 0);
g1.addEdge(0, 2);
g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(3, 4);
g1.AP();

console.log("Articulation points in Second graph");
let g2 = new Graph(4);
g2.addEdge(0, 1);
g2.addEdge(1, 2);
g2.addEdge(2, 3);
g2.AP();

console.log("Articulation points in Third graph");
let g3 = new Graph(7);
g3.addEdge(0, 1);
g3.addEdge(1, 2);
g3.addEdge(2, 0);
g3.addEdge(1, 3);
g3.addEdge(1, 4);
g3.addEdge(1, 6);
g3.addEdge(3, 5);
g3.addEdge(4, 5);
g3.AP();
