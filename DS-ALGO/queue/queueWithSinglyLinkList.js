class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(data) {
        const newNode = new Node(data)
        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length ++
        return this
    }

    dequeue() {
        if(this.length === 0) {
            return null
        }

        if(this.first === this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.length --
        return this

    }

    peek() {
        console.log(this.first)
        return this.first
    }
}

const queueDemo = new queue()
queueDemo.enqueue('Ritesh')
queueDemo.enqueue('Kumar')
queueDemo.enqueue('Singh')
// queueDemo.dequeue()
// queueDemo.dequeue()
// queueDemo.dequeue()
queueDemo.peek()
console.log(queueDemo)