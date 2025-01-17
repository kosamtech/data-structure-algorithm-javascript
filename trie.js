// Trie Data Structure

// Also called prefix tree is a special type of tree used to store associative data structures;

// A trie stores data in steps; each step is a node in the try;

// The is is often used to store words since there are a finite number of letters that can be put together to make a string

// A possible use case would be to validate that a word is in a dictionary

// Each step or node would represent one letter of a word

// The steps begin to branch off when the order of the letters diverged from the other words in the try or when a word ends.

class Node {
    constructor() {
        this.keys = new Map();
        this.end = false;
        this.setEnd = function () {
            this.end = true;
        };
        this.isEnd = function () {
            return this.end;
        };
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(input, node = this.root) {
        if (input.length === 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }

    isWord(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return node.keys.has(word) && node.keys.get(word).isEnd()
            ? true
            : false;
    }

    print() {
        let words = new Array();
        let search = function (node, string) {
            if (node.keys.size !== 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
}

let trie = new Trie();
trie.add("ball");
trie.add("bat");
trie.add("doll");
trie.add("dork");
trie.add("do");
trie.add("dorm");
trie.add("send");
trie.add("sense");
console.log(trie.isWord("doll"));
console.log(trie.isWord("dor"));
console.log(trie.isWord("dorf"));
console.log(trie.print());
