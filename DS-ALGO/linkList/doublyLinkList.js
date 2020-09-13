class doublyLinkList {
    constructor(data) {
        this.head = {
            data : data,
            prev: null,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }  

    append(data) {
        const node = {
            data: data,
            prev: null,
            next: null
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        this.length ++
    }

    prepond(data) {
        const node = {
            data: data,
            prev: null,
            next: null
        }
      
        node.next = this.head
        this.head.prev = node
        console.log(node)
        this.head = node
        this.length ++  
    }

    //need to be understood
    insert(data, value) {
        // const node = new node(data)
        let nextNode = {};
        const node = {
            data : data,
            prev: null,
            next: null
        }
        let currentNode = this.head
        while (currentNode !==null) {
            if(currentNode.data === value) {             
                nextNode = currentNode.next;
                if(nextNode) {
                    nextNode.prev = node
                    node.next = nextNode
                }
                node.prev = currentNode
                currentNode.next = node
                // console.log(currentNode)
                this.length ++
                return this
            }
            currentNode = currentNode.next
        }
        return this
    }

    // need to handle for first element
    remove(value) {
        let currentNode = this.head
        let previousNode = {}
        let nextNode = {}
        while(currentNode != null) {
            if(currentNode.data === value) {
                console.log(previousNode.next)
                if(previousNode.next) {
                   
                    nextNode = currentNode.next
                    if(nextNode) {
                        previousNode.next = nextNode
                        nextNode.prev = previousNode
                    } else {
                        previousNode.next = null
                    }
                    
                    this.length --
                    return this
                } else {
                    this.head = currentNode.next
                    this.head.prev = null
                    this.length --
                    return this
                } 
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }
    }

    printAll() {
        let currentNode = this.head
        let printArr = []

        while(currentNode !== null) {
            printArr.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(printArr)
        return printArr
    }
}

const doublyLinkList1 = new doublyLinkList(10)
doublyLinkList1.append(20)
doublyLinkList1.append(30)
doublyLinkList1.append(40)
// // doublyLinkList1.prepond(50)
// doublyLinkList1.insert(25, 20)
// doublyLinkList1.insert(35, 30)
// // doublyLinkList1.insert(55, 50)
// doublyLinkList1.insert(45, 40)
doublyLinkList1.remove(20)
console.log(doublyLinkList1)
doublyLinkList1.printAll()