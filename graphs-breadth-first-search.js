// Graphs Breadth First Search

// Finding the distance between two nodes in a graph

// This is one of the main uses of graphsand is called Graph Travesal

// Traversal algorithms are algorithms used to traverse or visit nodes in a graph

// The main types of traversal algorithms are breadth-first-search and depth-search-first

// The algorithm starts at one node first visits all its neighbours that are one edge away

// Then goes on to visiting each of their neighbors, The point is to determine how close nodes are to a root node


function BFS(graph, root) {

  let nodesLen = {};

  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity
  }

  nodesLen[root] = 0;

  let queue = [root];
  let current;

  while (queue.length != 0) {
    current = queue.shift()

    let curConnected = graph[current];
    let neighborIdx = [];
    let index = curConnected.indexOf(1);
    while (index != -1) {
      neighborIdx.push(index);
      index = curConnected.indexOf(1, index + 1)
    }

    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
      
    }
  }

  return nodesLen;
}

let exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
]

let bfs = new BFS(exBFSGraph, 1)

console.log(bfs);