class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert
    insert(value) {
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    // go left
                    if (!currentNode.left) { // check if left node is empty
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if(!currentNode.right) { // check if right node is empty
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        
    }

    // lookup
    lookup (value) {
        let currentNode = this.root;
        if (!currentNode) {
            return false;
        }
        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left
            } else if (currentNode.value < value) {
                currentNode = currentNode.right
            }
        }
       return false;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(9))
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : 
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right);
    return tree;
}