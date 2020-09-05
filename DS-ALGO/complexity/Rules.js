
/**
 * 
 * @param {*} values 
 * Rule 1: Worst Case
 */
function findNumber(values) {
    
    values.forEach(element => {
        if (element === 10) {
            console.log('found the number : '+element)
        }
    });
}

/**
 * 
 * @param {*} boxes 
 * 
 * Rule 2: Remove the constant 
 * 
 */
function compressBoxesTwice(boxes) {

    // Loop 1
    boxes.forEach(element => {
        console.log(element);
    });

    // loop 2

    boxes.forEach(element => {
        console.log('second loop : '+element)
    });

}

/**
 * 
 * @param {*} boxes 
 * @param {*} boxes2 
 * Rule No 3: Different terms for inputs
 */
function compressBoxesTwice2(boxes, boxes2) {

    // Loop 1
    boxes.forEach(element => {
        console.log(element);
    });

    // loop 2

    boxes2.forEach(element => {
        console.log('second loop : '+element)
    });

}

/**
 * 
 * @param {*} boxes 
 * 
 * Rule 4: Drop the non dominate 
 * 
 */
function compressBoxesQuardatic(boxes) {

    // Loop 1
    boxes.forEach(element => {
        console.log(element);
    });

    // loop 2

    boxes.forEach(element => {
        boxes.forEach(secondElement=> {
            console.log(element + ' : '+secondElement)
        })
    });

}

/**
 * Function call for rule 1
 * If we can break then loop will break and performace will be improve 
 * Consider if we find the element on first index then technically it will be 
 * O(1) but it will be O(n) always since Big O rule consider always worst case.
 */

 let numVal = [20, 30, 40, 50, 10, 70, 80]
 findNumber(numVal)

/**
 * Function call for rule 2 
 * Technically it will be O(2n) but since we need to remove the constant it will be O(n)
 */

let arr = [1, 2, 3, 4]
compressBoxesTwice(arr)

/**
 * Function call for rule 3 
 * It looks like its O(2n) with previous exmaple but it will be O(n+m) 
 * since input is different and it can be any number of values
 */

 let arr1 = [10, 20, 30, 40]
 compressBoxesTwice2(arr, arr1)

 /**
  * Function call for rule 4
  * Technically it will be O(n + n^2) but by rule no 4, n will be droped and 
  * result will be O(n^2)
  */
 let valArr = ['Raman', 'Sitan', 'Lakshmanna', 'Hanumanta']
 compressBoxesQuardatic(valArr)
