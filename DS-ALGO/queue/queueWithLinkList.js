class node {
    constructor(data) {
        this.data = data,
        this.next = null,
        this.prev = null
    }
}

/**
 * TODO after clarification
 */
class queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(data) {
        const newNode = new node(data)
        const prevNode = this.head
        // console.log(this.head)
        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
            this.length ++
            return this
        }
        newNode.prev = this.last
        this.last.next = newNode
        this.last = newNode
        this.length ++
        return this
    }

    dequeue() {
        if(this.length === 0) {
            console.log('no item found in queue')
            return 0
        }
        if (this.first === this.last) {
            this.last = null
        }
        this.first.next = this.first
        this.length --
        return this
    }

    peek() {
        console.log(this.head.data)
        return this.first
    }

    printAll() {
        const printArr = []
        let currentNode = this.head

        while(currentNode !== null) {
            printArr.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(printArr)
        return printArr
    }
}

const queueDemo = new queue()
queueDemo.enqueue('Ritesh')
queueDemo.enqueue('Kumar')
queueDemo.enqueue('Singh')
queueDemo.dequeue()
// queueDemo.peek()
// queueDemo.printAll()
console.log(queueDemo)
