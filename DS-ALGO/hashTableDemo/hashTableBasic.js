class hash {
    constructor(size) {
        this.data = new Array(size)
        // console.log(this.data)
    }

    // O(1)
    _hash(key) {
        let hashVal = 0
        for(let i=0; i<key.length; i++) {
            hashVal = (hashVal + key.charCodeAt(i) * i) % this.data.length
        }
        // console.log(hashVal)
        return hashVal
    }

    // O(1)
    set(key, value) {
        let address = this._hash(key)
        if(!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        // console.log(this.data)
        return this.data
    }

    // most of the time O(1) but if list is big it might be O(n)
    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        console.log(currentBucket)
        if(currentBucket) {
            console.log('inside current buccket')
            for(let i=0; i<currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }    
            }
        } else {
            return undefined
        } 
    }

    keys() {
        const keyArr = []
        for(let i=0; i<this.data.length; i++) {
            if(this.data[i]) {
                if(this.data[i].length > 1) {
                    for(let j=0; j<this.data[i].length; j++) {
                        keyArr.push(this.data[i][j][0])
                    }
                } else {
                    keyArr.push(this.data[i][0][0])
                }
                
            }
        }
        console.log(keyArr)
    }

}

const hashDemo = new hash(5)
hashDemo._hash('ritesh')
hashDemo.set('grapes', 10000)
hashDemo.set('apple', 54)
hashDemo.set('orange', 20000)
hashDemo.set('banana', 10000)
const add = hashDemo.get('apple')
console.log(add)
hashDemo.keys()
