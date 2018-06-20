class Dictionary {
  constructor() {
    this.items = {};
  }

  set(key, value) {
    this.items[key] = value;
  }

  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    } else return false;
  }

  has(key) {
    return key in this.items;
  }

  get(key) {
    return this.has(key) ? this.items[key] : false;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  keys() {
    return Object.keys(this.items);
  }

  values() {
    let values = [];

    Object.keys(this.items).map(key => {
      if (this.has(key)) {
        values.push(this.items[key]);
      }
    });
    return values;
  }

  getItems() {
    return this.items;
  }
}

function test() {
  var words = new Dictionary();

  console.log("\n------add()------");
  words.set("boy", "A male human");
  words.set("girl", "A female human");
  words.set("son", "A male child");
  console.log(words.has("man")); // false
  console.log(words.values());

  console.log("\n\n------size()------");
  console.log(words.size()); // 3
  console.log(words.delete("son"));
  console.log(words.size()); // 2
  console.log(words.get("girl"));
}

test();
