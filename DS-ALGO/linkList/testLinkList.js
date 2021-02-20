class LinkedList {
    constructor (value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        console.log(this.tail)
        this.tail.next = newNode
        console.log(this.tail)
        this.tail = newNode
        console.log(this.head)
        this.length ++
        return this

    }

    insert (value, ) {

    }
}

const list = new LinkedList(10);
list.append(20);