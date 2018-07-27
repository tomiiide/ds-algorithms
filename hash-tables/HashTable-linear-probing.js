class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[ ${this.key} - ${this.value} ]`;
  }
}

class HashTable {
  constructor() {
    this.table = [];
  }

  put(key, value) {
    let position = this.looseHashCode(key);
    if (this.table[position] == undefined) {
      this.table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (this.table[index] !== undefined) {
        index++;
      }
      this.table[index] = new ValuePair(key, value);
      return this.table[index].value;
    }
    return this.table[position].value;
  }

  remove(key) {
    let position = this.looseHashCode(key);
    let value = undefined;
    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        value = this.table[position].value;
        this.table[position] = undefined;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          value = this.table[position].value;
          this.table[position] = undefined;
        }
      }
    }
    return value;
  }

  get(key) {
    let position = this.looseHashCode(key);
    if (this.table[position] !== undefined) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      } else {
        let index = ++position;
        while (
          this.table[index] === undefined ||
          this.table[index].key !== key
        ) {
          index++;
        }
        if (this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
    return undefined;
  }

  looseHashCode(key) {
    var hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }

    return hash % 37;
  }

  djb2HashCode(key) {
    var hash = 5381;
    for (let index = 0; index < key.length; index++) {
      hash = hash * 33 + key.charCodeAt(index);
    }

    return hash % 1013;
  }
}

function test() {
  var hash = new HashTable();
  console.log("\n\n-----testing put-----");
  console.log(hash.put("Gandalf", "gandalf@gmail.com"));
  console.log(hash.put("John", "john@gmail.com"));
  console.log(hash.put("Tyrion", "tyrion@gmail.com"));

  console.log("\n\n-----testing get-----");
  console.log(hash.get("Gandalf"));
  console.log(hash.get("Lois"));

  console.log("\n\n-----testing remove-----");
  hash.remove("Gandalf");
  console.log(hash.get("Gandalf"));
}

test();
