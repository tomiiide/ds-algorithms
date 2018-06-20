import LinkedList from "./../linked-lists/LinkedList";

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

    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList();
    }
    this.table[position].append(new ValuePair(key, value));
  }

  remove(key) {
    let value = this.table[this.looseHashCode(key)];
    this.table[this.looseHashCode(key)] = undefined;
    return value;
  }

  get(key) {
    let position = this.looseHashCode(key);

    if (this.table[position] !== undefined) {
      var current = this.table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
      }
    }
  }

  looseHashCode(key) {
    var hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }

    return hash % 37;
  }
}

function test() {
  var hash = new HashTable();
  console.log("\n\n-----testing put-----");
  hash.put("Gandalf", "gandalf@gmail.com");
  hash.put("John", "john@gmail.com");
  hash.put("Tyrion", "tyrion@gmail.com");

  console.log("\n\n-----testing get-----");
  console.log(hash.get("Gandalf"));
  console.log(hash.get("Lois"));

  console.log("\n\n-----testing remove-----");
  hash.remove("Gandalf");
  console.log(hash.get("Gandalf"));
}

test();
