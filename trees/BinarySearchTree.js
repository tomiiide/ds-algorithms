class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let insertNode = function(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    let newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  search(key) {
    let searchNode = function(node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    };

    return searchNode(this.root, key);
  }

  inOrderTraverse(callback) {
    let inOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    };

    inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    let preOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };

    preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    let postOrderTraverseNode = function(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };

    postOrderTraverseNode(this.root, callback);
  }

  min() {
    let minNode = function(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }

        return node.key;
      }

      return null;
    };
    return minNode(this.root);
  }

  max() {
    let maxNode = function(node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }
        return node.key;
      }
      return null;
    };

    return maxNode(this.root);
  }

  remove(key) {}
}

function test() {
  let tree = new BinarySearchTree();
  tree.insert(11);
  tree.insert(7);
  tree.insert(15);
  tree.insert(23);
  tree.insert(54);
  tree.insert(22);
  tree.insert(4);
  tree.insert(34);
  tree.insert(57);
  tree.insert(67);
  tree.insert(42);
  tree.insert(15);
  tree.insert(17);

  let printNode = function(value) {
    console.log(value);
  };

  console.log("-------in order traversal---------");
  tree.inOrderTraverse(printNode);
  console.log("-------pre order traversal---------");
  tree.preOrderTraverse(printNode);
  console.log("-------post order traversal---------");
  tree.postOrderTraverse(printNode);
  console.log("-------min---------");
  console.log(tree.min());
  console.log("-------max---------");
  console.log(tree.max());
  console.log("-------searching---------");
  console.log(tree.search(32) ? "key 32 was found" : "key 32 wasn't found");
  console.log(tree.search(54) ? "key 54 was found" : "key 54 wasn't found");
  console.log(tree.search(101) ? "key 101 was found" : "key 101 wasn't found");
}

test();
