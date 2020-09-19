class stack {

    constructor() {
        this.arr = []
    }

    push(value) {
        this.arr.push(value)
    }

    pop() {
        this.arr.pop()
    }

    peek() {
        return this.arr[this.arr.length-1]
    }
}

const stackDemo = new stack()
stackDemo.push(10)
stackDemo.push(20)
stackDemo.push(30)
stackDemo.pop()
console.log(stackDemo.peek())
console.log(stackDemo)
