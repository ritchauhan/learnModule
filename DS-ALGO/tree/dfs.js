class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class DFS {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        let currentNode = this.root;
        if (!currentNode) {
            this.root = newNode;
            return this;
        } 

        while (true) {
            if (currentNode.value > value) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = newNode
                    return this;
                }
            } else {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode
                    return this;
                }
            }
        }
    }

    inorderDfs() {
        return this.inOrderRecursive(this.root, [])
    }

    preOrderDfs() {
        return this.preOrderRecursive(this.root, [])
    }

    postOrderDfs() {
        return this.postOrderRecursive(this.root, [])
    }   

    inOrderRecursive(node, list) {
        if(node.left) {
            this.inOrderRecursive(node.left, list)
        }
        list.push(node.value)
        if(node.right) {
            this.inOrderRecursive(node.right, list)
        }
        return list
    }

    preOrderRecursive(node, list) {
        list.push(node.value)
        if(node.left) {
            this.preOrderRecursive(node.left, list)
        }
        if(node.right) {
            this.preOrderRecursive(node.right, list)
        }
        return list
    }

    postOrderRecursive(node, list) {
        console.log(node)
        if(node.left) {
            console.log('inside left')
            this.postOrderRecursive(node.left, list)
        }
        if(node.right) {
            console.log('inside right')
            this.postOrderRecursive(node.right, list)
        }
        // console.log(node)
        console.log(list)
        list.push(node.value)
        return list
    }
   
}

let dfsDemo = new DFS();
dfsDemo.insert(9);
dfsDemo.insert(4);
dfsDemo.insert(20);
dfsDemo.insert(1);
dfsDemo.insert(6);
dfsDemo.insert(15);
dfsDemo.insert(170);

// console.log(dfsDemo);
console.log(dfsDemo.inorderDfs());
console.log(dfsDemo.preOrderDfs())
console.log(dfsDemo.postOrderDfs())