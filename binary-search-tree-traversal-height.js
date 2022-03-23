// Binary Search Tree

// A tree data structure is a way to hold data that when visualized looks like you would see in nature now

// All data points in the tree are called nodes

// The top of the tree is called the root and from here it branches out into additional nodes of whih may have more child nodes and so on

// Nodes with branches leading to other nodes are referred to as the parent of the node of the branches that leads to the child

// Leaf nodes are nodes at the end of the tree that have no children

// While a tree data structure can have any number of branches at a single node 

// A Binary tree however can only have two branches for every node

// Binary search tree are ordered 

// each left subtree is less or equal to the parent node

// each right subtree is greater or equal to the parent node

// Because they use the principle of binary search on average operations are able to skip about half of the tree so that each lookup, insertion, or deletion takes time proportional to the logarithm of the number of items stored in the tree

// This is much better than the linear time required to find items by key in an unsorted array but slower than the corresponding operations on a hash table

// Height is the distance from the root node to left nodes

// For a Given tree there will be a minimum height and a maximum height and if the tree is balanced these values will differ at most by one

// The MinHeight is the distance from the root node to the first leaf node without two children

// The MaxHeight is the distance from the root node to whatever the most bottom node is

// It has to be either 0 or 1 to be balanced

// Tree Traversal Methods can be used to explore tree data structures and basically find all the values in the tree

// Three ways traversal can be done
// 1. inOrder traversal ----> you are going to begin the search at the left most node and end in the right most node
// 2. preOrder traversal ----> You explore the root nodes before the leaves
// 3. postOrder traveral  ----> You explore the leaf nodes before the roots
// 3. levelOrder traversal ----> breadth -first search; this explores all the nodes in a given level within a tree before continuing on to the next level further

class Node {
  constructor(data, left= null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;  
      } else {
        current = current.right;
      }
      if (current === null) {
        return null
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } 
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node === null) {
        return null;
      }

      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null
        }
        // node has no left child
        if (node.left === null) {
          return node.right;
        }
        // node has no right child;
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() -1)
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (this.root === null) {
      return null
    } else {
      let result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left) {
          Q.push(node.left);
        }
        if (node.right) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}


const bst = new BinarySearchTree()

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20)

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder', bst.inOrder());
console.log('preOrder', bst.preOrder());
console.log('postOrder', bst.postOrder());
console.log('levelOrder', bst.levelOrder());