
/**
 * class demo for array creation
 */
class arrayDemo 
{
    /**
     * 
     * @param {*} length 
     * @param {*} data 
     */
    constructor() {
        this.length = 0
        this.data = {}
    }

    // access O(1)
    get(index) {
        return this.data[index]
    }

    // insert O(1)
    push(value) {
        this.data[this.length] = value
        this.length ++
    }

    // delete O(1)
    pop(){
        delete this.data[this.length-1]
        this.length --
    }

    // insert O(n)
    insert(index, value) {
        for (let i=this.length-1; i>=index; i--) {
            this.data[i+1] = this.data[i]
        }
        this.data[index] = value
        this.length ++
    }

    // delete O(n)
    delete(index) {
        delete this.data[index]
        for (let i=index; i<this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        this.length --
    }


}

const arrDemo = new arrayDemo()
arrDemo.push('Ritesh')
// console.log(arrDemo.get(0))
arrDemo.push('Chauhan')
arrDemo.push('kumar')
arrDemo.push('rajput')
console.log(arrDemo)
// arrDemo.pop()
arrDemo.insert(3, 'Singh')
console.log(arrDemo)
arrDemo.delete(2)
console.log(arrDemo)
