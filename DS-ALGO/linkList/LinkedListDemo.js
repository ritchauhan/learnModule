
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
        console.log(this.tail)
        console.log(this.head)
        this.tail = newNode
        console.log(this.tail)
        console.log(this.head)
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
        // console.log(prePendNode)
        this.length++
    }

    printAll () {
        let currentNode = this.head
        let printArr = []
        while (currentNode !== null) {
            printArr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(printArr)
        return printArr
    }
    //need to be understood
    insert(data, value) {
        let nextNode = {};
        const node = {
            value : data,
            next: null
        }
        let currentNode = this.head
        while (currentNode !==null) {
            if(currentNode.value === value) {             
                nextNode = currentNode.next;
                node.next = nextNode
                currentNode.next = node
                this.length ++
                return this
            }
            currentNode = currentNode.next
        }
        return this
    }

    remove(value) {
        let currentNode = this.head
        let previousNode = {}
        while(currentNode != null) {
            if(currentNode.value === value) {
                if(previousNode.next) {
                    previousNode.next = currentNode.next
                    this.length --
                    return this
                } else {
                    this.head = currentNode.next
                    this.length --
                    return this
                } 
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }
    }

    // need to unserstand
    reverse() {
        let first = this.head
        let second = first.next

        while (second) {
            let temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this
    }
}

let linkedList = new LinkedList(10)
linkedList.append(5)
linkedList.append(16)
// linkedList.append(20)
// linkedList.prepend(11)
// linkedList.prepend(21)
// linkedList.insert(31, 11)
// linkedList.insert(41, 31)
// linkedList.remove(21)
// linkedList.append(100)
// console.log/(linkedList)
linkedList.reverse()
linkedList.printAll()