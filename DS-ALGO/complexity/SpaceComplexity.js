function sayHi(value) {

    // loop to print hii
    for (let i=0; i<value.length; i++) {
        console.log('hii')
    }
}

function sayHiDynamically(num) {
    let hiArr = []
    for (let i=0; i<num; i++) {
        hiArr.push('hii')
    }
    console.log(hiArr)
}

/**
 * Space complexity of sayHi function is O(1) and time complexity is O(n)
 * since there is no varible, data structure, function used under loop so space complexity is O(1)
 */
sayHi([1, 2, 3, 4, 5])

/**
 * Space complexity of this function will be O(n) since data structure has been and assigned under 
 * function and time complexity will be O(n) 
 * 
 */
sayHiDynamically(10)