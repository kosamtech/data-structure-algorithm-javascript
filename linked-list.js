// Linked List
// A common data structure where element are stored in a node; the node contains two key pieces of information; the element itself and reference to the next node

// Difference Array Vs Linked List
// Arrays                       Linked List
// 1. Fixed size                Dynamic size
// 2. Inefficient insertion     Efficient insertion and Deletion
//    and deletion
// 3. random access i.e         No random access
//    efficient indexing
// 4. May result in much memory No waste of memory
//    waste
// 5. sequential access is      sequential access is slow reason ---->
//    faster: reason --->       elements not in configuous memory location
//    elements in configuous
//    memory location

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
    }

    size() {
        return this._length;
    }

    head() {
        return this._head;
    }

    add(element) {
        let node = new Node(element);
        if (this._head === null) {
            this._head = node;
        } else {
            let currentNode = this._head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this._length++;
    }

    remove(element) {
        let currentNode = this._head;
        let previousNode;
        if (currentNode.element === element) {
            this._head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this._length--;
    }

    isEmpty() {
        return this._length === 0;
    }

    indexOf(element) {
        let currentNode = this._head;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    elementAt(index) {
        let currentNode = this._head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    addAt(index, element) {
        let node = new Node(element);
        let currentNode = this._head;
        let previousNode;
        let currentIndex = 0;

        if (index > this._length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this._head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }

        this._length++;
    }

    removeAt(index) {
        let currentNode = this._head;
        let previousNode;
        let currentIndex = 0;
        if (index < 0 || index >= this._length) {
            return null;
        }

        if (index === 0) {
            this._head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }

        this._length--;
        return currentNode.element;
    }
}

let linked = new LinkedList();
linked.add("Kitten");
linked.add("Puppy");
linked.add("Dog");
linked.add("Cat");
linked.add("Fish");
console.log(linked.size());
console.log(linked.removeAt(10));
console.log(linked.elementAt(3));
console.log(linked.indexOf("Puppy"));
console.log(linked.size());
