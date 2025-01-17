// Graphs Data Structure

// Graphs are collections of things and the relationships or connection between them;
//  The data in a graph are called nodes or vertices
// The connection between are called edges

// One example of graphs is a social network where the nodes are you and other people; and the edges are whether two people are frinds with each other.

// There are two major types of graphs; directed and undirected;

// Undirected graphs are graphs withor any direction on the edges between nodes

// Directed graphs are graphs with a direction and its edges

// Exapme of undirected graph could be a social network; the nodes are people and the edges are friends

// Example of directed graph could be the internet and web page links; the nodes are web pages and the directed edges are links to other pages which might not necessarily point the other way

// Three ways to represent a graph
// 1. Adjacency List ----> this representation for a graph associates each vertex in the graph with the collection of its neighbouring vertices or edges
// a-----b-----c
// Node A: Node B
// Node B: Node A, Node C
// Node C: Node B
// In javascript

let undirectedG = {
    NodeA: ["NodeB"],
    NodeB: ["NodeA", "NodeC"],
    NodeC: ["NodeB"],
};

let undirectedGArr = {
    NodeA: [1],
    NodeB: [0, 2],
    NodeC: [1],
};

// 2. Adjacency Matrix
// Is a 2-D array where each nested array has the same number of elements as the outer array so it's basically a matrix of numbers where the numbers represent the edges
// Zero means there is no edge or relationship and ones mean there is a relationship
// a--------b-------c

// in javascript
let adjMatrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
];

// Unlike an adjacency list each row of thr matrix has to have the same number of elements as nodes in the graph
// The above is a 3 x 3 matrix, which means we have 3 nodes in our graphs

// a <-----b<------c

let adjaMatrix = [
    [0, 0, 0],
    [1, 0.0],
    [0, 1, 0],
];

// There are only ones where a node is pointing towards another node. And since there are only two points; there are only two nodes

// 3. Incidence Matrix
// Like the adjaceny matrix, incidence matrix is a 2-D array, however the row and colum means something else here;
// Adjaceny Matrix use both rows and columns to represent nodes and incidence matrix uses rows to represent matrix and columns to represent edges. This means we have an uneven number of rows and columns. Each column will represent a unique edges. Also each edge connects two nodes to show that there is edge between two nodes. You will put a 1 in the rows of a particular column as you can see in the diagram

// In javascript
let incMatDir = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1],
];

// Graphs can also have weights on their edges so far
// We have unweighted edges where just the presence and lack of edges binary 0 or 1; you can have different weights depending on your application
// A different way is represented as number greater than one
