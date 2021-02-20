class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BFS {
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

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        console.log(queue)

        while (queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            } 
            if(currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return list
    }

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value)
        if(currentNode.left) {
            queue.push(currentNode.left)
        }
        if(currentNode.right) {
            queue.push(currentNode.right)
        }

        return this.breadthFirstSearchRecursive(queue, list)
    }
}

let bfsDemo = new BFS();
bfsDemo.insert(9);
bfsDemo.insert(4);
bfsDemo.insert(20);
bfsDemo.insert(1);
bfsDemo.insert(6);
bfsDemo.insert(15);
bfsDemo.insert(170);
// console.log(bfsDemo.breadthFirstSearch())
console.log(bfsDemo.breadthFirstSearchRecursive([bfsDemo.root], []))

// console.log(bfsDemo);