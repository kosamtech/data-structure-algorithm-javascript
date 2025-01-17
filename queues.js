// Queues

// First In First Out (FIFO)

// example application ---> queueing documents for printing in a printer -----> first document sent is the first document printed
// customers queueing to be served at the counter ----> first customer to arrive is the first customer to be served

function Queue() {
    let collection = [];

    this.print = function () {
        console.log(collection);
    };

    this.enqueue = function (element) {
        collection.push(element);
    };

    this.dequeue = function () {
        return collection.shift();
    };

    this.front = function () {
        return collection[0];
    };

    this.size = function () {
        return collection.length;
    };

    this.isEmpty = function () {
        return collection.length === 0;
    };
}

// let q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front())
// q.print();

function PriorityQueue() {
    let collection = [];

    this.printCollection = function () {
        console.log(collection);
    };

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    // checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if (!added) {
                collection.push(element);
            }
        }
    };

    this.dequeue = function () {
        let value = collection.shift();
        return value[0];
    };

    this.isEmpty = function () {
        return collection.length === 0;
    };

    this.front = function () {
        return collection[0];
    };

    this.size = function () {
        return collection.length;
    };
}

let pq = new PriorityQueue();
pq.enqueue(["Kosam Omollo", 2]);
pq.enqueue(["Beau Carnes", 3]);
pq.enqueue(["Quincy Larson", 1]);
pq.enqueue(["Ewa Mitulskwa", 4]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
