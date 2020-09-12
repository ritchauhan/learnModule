
// 10 --> 5 --> 16

/**
 * Link list demo
 */
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value) {

        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length ++
        return this
    }

    prepend(value) {
        const prePendNode = {
            value: value,
            next: null
        }
        prePendNode.next = this.head
        this.head = prePendNode
        console.log(prePendNode)
        this.length++
    }
}

let linkedList = new LinkedList(10)
linkedList.append(5)
linkedList.append(16)
linkedList.append(20)
linkedList.prepend(11)
linkedList.prepend(21)
console.log(linkedList)