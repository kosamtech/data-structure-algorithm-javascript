// Stacks

// Stack is First In Last Out (FILO)

// example application -----> web browser stacks your visited sites in the order you opened them
// on back press last visited site will be removed from stack

// functions push ----> adding to top of stack
// pop -----> removing from top of stack
// peek ----> displaying top element of a stack
// length/size ------> determing how many elements are in stack

// Array object already has all the functions we need in order to use the stack

// Palindrome is a word that is spelled the same forward and backwards such as bob

let letters = []; // this is our stack

let word = "bob";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}


// Create a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // add value onto the end or top of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the top of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }

  // return the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1];
  }
}


let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Kosamtech");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
