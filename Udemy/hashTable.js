class HashTable {
  // size should be a prime number
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // SET
  // 1. Accepts a key and a value
  // 2. Hashes the key
  // 3. Stores the key-value pair in the hash table array via separate chaining (nested structure)
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // GET
  // 1. Accepts a key
  // 2. Hashes the key
  // 3. Retrieve the key-value pair in the hash table
  // 4. If the key isn't found, returns undefined
  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      return 'No result';
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  // KEYS
  // Loop through the hash table array and returns "an array of keys" in the table
  keys() {
    const keysArr = [];
    this.keyMap.forEach((v, i) => {
      if (this.keyMap[i]) {
        v.forEach(a => {
          if (!keysArr.includes(a[0])) {
            keysArr.push(a[0]);
          }
        });
      }
    });
    return keysArr;
  }

  // VALUES
  // Loop through the hash table array and returns "an array of values" in the table
  // Duplicate data?
  values() {
    const valuesArr = [];
    this.keyMap.forEach((v, i) => {
      if (this.keyMap[i]) {
        v.forEach(a => {
          if (!valuesArr.includes(a[1])) {
            valuesArr.push(a[1]);
          }
        });
      }
    });
    return valuesArr;
  }
}

const ht = new HashTable(5);
ht.set('hello', 'Nice to meet you');
ht.set('color', '2.3');
ht.set('coding', 'Fun');
ht.set('algo', 'Data');
ht.set('algor', 'Data');
ht.set('algori', 'Data');

console.log(ht);

console.log(ht.values());
console.log(ht.keys());

// Big O of Hash Tables (average case)
// Insert, Deletion, Access : O(1)
// With the worst hash function : O(n)

// Good Hash function?
// 1. fast
// 2. distribute keys uniformly
// 3. deterministic (exact same output for same input)

// Deal with two keys that hash to the same index
// 1. Separate chaining
// 2. Linear probing
