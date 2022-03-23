// Heaps

// A binary heap is a partially ordered binary tree which satifies the heap property

// It has some similarity to a binary search tree except that the order is a little different

// Each node has at most two child nodes; the heap property indicates a specific relationship between the parent and child nodes

// You may have a max heap in which all parent nodes are equal than or greater to than the child nodes

// Or you have a min heap in which all child nodes are greater than or equal to the parent nodes

// The order between child nodes on the same level does not matter

// Binary heaps are also complete binary trees; this means that all levels of the tree are fully filled and is the last level is partially filled; it is filled from left to right

// Binary heaps may be implemeted as tree structures with nodes that contain left and right references 

// However heaps are more often implemented as arrays

// This is possible because of the partial ordering according to the heap property; we can just compute the parent-child relactionship of the elements

// Common use case for the heap data structure is for heap sort; This is one of the most efficient algorithms with average worst-case perfomance of O of n log

// Heap sort works by taking an unsorted array; adding each item in the array into a minHeap and the extracting every item out of the minHeap into a new array

// The MinHeap structure ensures that new array will contain the original items in least to greatest order

// left child: i * 2
// right child: i * 2 + 1
// parent: Math.floor(i / 2)

// when representing a heap leave index 0 as null



let MinHeap = function() {
  let heap = [null];

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let index = heap.length - 1;
      while (heap[index] < heap[Math.floor(index/2)]) {
        if (index >= 1) {
          [ heap[Math.floor(index/2)], heap[index] ] = [ heap[index], heap[Math.floor(index /2 )] ];
          if (Math.floor(index/2) > 1) {
            index = Math.floor(index/2)
          } else {
            break;
          }
        }
      }
    }
  }


  this.remove = function() {
    let smallest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [ heap[1], heap[2] ] = [ heap[2], heap[1] ];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [ heap[i], heap[left] ] = [ heap[left], heap[i]];
          i = 2 * i;
        } else {
          [ heap[i], heap[right] ] = [ heap[right], heap[i] ];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        }
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  }


  this.sort = function() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  }
}


let MaxHeap = function() {

  let heap = [null];

  this.print = () => heap;

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let index = heap.length - 1;
      while (heap[index] > heap[Math.floor(index/2)]) {
        if (index >= 1) {
          [ heap[Math.floor(index/2)], heap[index] ] = [ heap[index], heap[Math.floor(index/2)] ];
          if (Math.floor(index/2) > 1) {
            index = Math.floor(index/2);
          } else {
            break;
          }
        }
      }
    }
  }

  this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

  this.sort = function() {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  }
}


let minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(13);
minHeap.insert(33);
minHeap.insert(2);
minHeap.insert(5);
minHeap.insert(12);
minHeap.insert(11);
console.log(minHeap.sort());


let maxHeap = new MaxHeap();
maxHeap.insert(3);
maxHeap.insert(13);
maxHeap.insert(33);
maxHeap.insert(2);
maxHeap.insert(5);
maxHeap.insert(12);
maxHeap.insert(11);
console.log(maxHeap.sort());