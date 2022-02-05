// 2022.2.5
// Unweighted Graph
// No error handling this time, just get the basic.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // add a key to the adjacency list with the name of the vertex
    // set its value to be an empty array
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // accept two vertices
  addEdge(vertex1, vertex2) {
    // Find in the adjacency list the key of vertex1 and push vertex2 to the array
    // Same, find in the adjacency list the key of vertex2 and push vertex1 to the array
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    // If you make this a "DIRECTED" graph, just remove the second line of this function.
  }

  removeEdge(vertex1, vertex2) {
    // Reassign the key of vertex1 to be an array that does not contain vertex2
    // Same! reassign the key of vertex2 to be an array that does not contain vertex1

    // Use indexOf & splice
    // const idx1 = this.adjacencyList[vertex1].indexOf(vertex2);
    // this.adjacencyList[vertex1].splice(idx1, 1);

    // Use filter
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    // 1. Loop as long as there are any other vertices in the adjacency list for that vertex
    // 2. Inside the loop, call removeEdge function with the vertex we are removing
    // and any values in the adjacency list for that vertex
    // 3. Delete the key in the adjacency list for that vertex

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex); // The order of arguments does not matter, because this is unweighted graph.
    }

    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();
g.addVertex('Seoul');
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addEdge('Seoul', 'Dallas');
g.addEdge('Seoul', 'Tokyo');

console.log(g);
g.removeEdge('Seoul', 'Tokyo');
console.log(g);
g.removeVertex('Dallas');
console.log(g);
