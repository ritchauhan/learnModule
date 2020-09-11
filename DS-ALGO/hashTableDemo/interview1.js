// Reccuring Number
// Google Question

// Given an array like [2,5,1,2,3,5,1,5]
// find first recurring numer
// output 2

// input2 [2, 1, 1, 5, 2, 6]
// output 1

// input3 [2, 3, 4, 5]
// output undefined

function findRecurringNumber(inputArr) {
    let map = new Map()
    // input check
    for(let i=0; i<inputArr.length; i++) {
        if(map.has(inputArr[i])) {
            return inputArr[i]
        } else {
            map.set(inputArr[i], 0)
        }
    }
    return undefined
}

function findRecurringNumber1(inputArr) {
    let map = {}
    // input check
    for(let i=0; i<inputArr.length; i++) {
        if(map[inputArr[i]] !== undefined) {
            return inputArr[i]
        } else {
            map[inputArr[i]] = i 
        }
        // console.log(map)
    }
    return undefined
}

let result = findRecurringNumber1([2,5,1,2,3,5,1,5])
console.log(result)
let result1 = findRecurringNumber1([2, 1, 1, 5, 2, 6])
console.log(result1)
let result2 = findRecurringNumber1([2, 3, 4, 5])
console.log(result2)