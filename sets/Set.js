class _Set {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (this.has(value)) {
      return false;
    } else {
      this.items[value] = value;
      return true;
    }
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    } else {
      return false;
    }
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.keys(this.items);
  }

  union(otherSet) {
    let newSet = new _Set();

    this.values().map(value => {
      newSet.add(value);
    });

    otherSet.values().map(value => {
      newSet.add(value);
    });

    return newSet;
  }

  intersect(otherSet) {
    let newSet = new _Set();

    this.values().map(value => {
      if (otherSet.has(value)) newSet.add(value);
    });

    return newSet;
  }

  difference(otherSet) {
    let newSet = new _Set();

    this.values().map(value => {
      if (!otherSet.has(value)) newSet.add(value);
    });

    return newSet;
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) return false;

    for (let index = 0; index < this.values().length; index++) {
      if (!otherSet.has(this.values()[index])) return false;
    }

    return true;
  }
}

function test() {
  let cars = new _Set();

  console.log("--------- testing has() -------");
  console.log(`cars.has("BMW") -> ${cars.has("BMW")}`); //true

  console.log("\n\n--------- testing add() -------");
  console.log(`cars.add("BMW") -> ${cars.add("BMW")}`); //true
  console.log(`cars.add("BMW") -> ${cars.add("BMW")}`); //false
  console.log(`cars.add("Benz") -> ${cars.add("Benz")}`); //true
  console.log(cars.values());
  console.log(cars.size());

  console.log("\n\n--------- testing delete() -------");
  console.log(`cars.delete("BMW") -> ${cars.delete("BMW")}`); //true
  console.log(`cars.delete("BMW") -> ${cars.delete("BMW")}`); //true
  console.log(cars.values());
  console.log(cars.size());

  console.log("\n\n--------- testing clear() -------");
  cars.clear();
  console.log(cars.values()); // []
  console.log(cars.size()); // 0

  console.log("\n\n--------- testing union() -------");
  cars.add("BMW");
  cars.add("Benz");
  console.log("--cars--");
  console.log(cars.values()); // []

  let bikes = new _Set();
  bikes.add("Ducatti");
  bikes.add("Suzuki");
  console.log("--bikes--");
  console.log(bikes.values());

  console.log("--union--");
  console.log(bikes.union(cars).values());

  console.log("\n\n--------- testing intersect() -------");
  let food = new _Set();
  food.add("yam");
  food.add("beans");
  console.log("--food--");
  console.log(food.values()); // []

  let fruit = new _Set();
  fruit.add("yam");
  fruit.add("cashew");
  console.log("--fruit--");
  console.log(fruit.values());

  console.log("--intersect--");
  console.log(fruit.intersect(food).values());

  console.log("--difference--");
  console.log(fruit.difference(food).values());

  let edibles = fruit.union(food);
  console.log("--subset--");
  console.log(fruit.subset(edibles)); //true
  console.log(fruit.subset(food)); // false
}

test();
