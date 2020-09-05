/**
 * Basic demo array
 */
function basicArrDemo() {
    //basic array
    let stringArr = ['a', 'b', 'c', 'd']

    // push into the array
    stringArr.push('e')

    // pop from the array 
    stringArr.pop()

    /**
     * add element at start
     * this will be O(n) since x will be added to the first index and other indexes will be 
     * shifted in a loop. if this whould have been at some particular index or at last it might have 
     * O(1)
     */
    stringArr.unshift('x') // O(n) since need to move the indexes on a loop.
    stringArr.push('abc')  // O(1) since will be added at last.

    // add element at middle
    stringArr.splice(2, 0, 'enjoy')

    console.log(stringArr)

}

// basic array demo call
basicArrDemo()