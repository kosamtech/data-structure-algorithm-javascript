// Hash Table
// Is used to implement associative arrays or mappings of key value pairs

// Common way to implement the map data structure or objects

// They are widely used because of how efficient they are

// The average time for each lookup is not tied to the number of elements stored in the table

// In fact the average time complexity of hash tables and big O notation is 0 of 1 for search insert and delete

// The way a hash table works is that it takes a key input and then runs it through a hash function

// A hash function basically just maos string to numbers and usually the numbers just correspond to indexes in an array

// A hash functions needs to be consistent so when you run a key though the hash function it always gives the same number and it should map different words to different numbers

// If two numbers get hashed to the same number, this is called a collision

// One way to handle collision is just to store both key value pairs at that index then upon lookup of either, you would have to iterate through the bucket of items to find the key you are looking for

// Most languages including JavaScript already have them built-in. Hash tables in js are usually used to implement objects

let hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 4;
    }

    print() {
        console.log(this.storage);
    };

    add(key, value) {
        let index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    };

    remove(key) {
        let index = hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    };

    lookup(key) {
        let index = hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    };
}

console.log(hash("kosamtech", 5));

let ht = new HashTable();
ht.add("kosam", "coder");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "pen");
console.log(ht.lookup("rex"));
ht.print();
