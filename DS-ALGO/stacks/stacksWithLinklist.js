
class Node {
    constructor(value) {
        this.value = value,
        this.next = null

    }
}

class Stack {
    constructor () {
        this.top = null,
        this.bottom = null,
        this.length = 0
    }

    peek() {
        return this.top;
    }

    pop() {
        if(this.length === 0) {
            return this
        }
        if(this.top === this.bottom) {
            this.top = null
            this.bottom = null
            this.length --
            return this
        }

        this.top = this.top.next
        this.length --
        return this
    }

    push(value) {
        const holdingPointer = this.top
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length ++
        return this
    }
}

const stack1 = new Stack()
stack1.push('google')
stack1.push('udemy')
stack1.push('discord')
stack1.pop()
// stack1.pop()
// stack1.pop()
// stack1.pop()
console.log(stack1.peek())
console.log(stack1)