const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 203, 4, 0]

/**
 * 
 * @param {*} numbers 
 * Bubble Sort examples
 * 
 */
function bubbleSort(numbers) {
    for (let i=0; i<numbers.length; i++) {
        for (let j=0 ; j<numbers.length; j++) {
            if (numbers[j] > numbers[j+1]) {
                let temp = numbers[j]
                numbers[j] = numbers[j+1]
                numbers[j+1] = temp
            }
        }
    }
}

bubbleSort(numbers)
console.log(numbers)