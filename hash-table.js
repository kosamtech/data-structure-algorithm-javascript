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
}

let HashTable = function() {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }

  this.remove = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
        
      }
    }
  }

  this.lookup = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1]
        }
      }
    }
  }
}

console.log(hash('kosamtech', 5));

let ht = new HashTable();
ht.add('kosam', 'coder');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'pen');
console.log(ht.lookup('rex'))
ht.print();