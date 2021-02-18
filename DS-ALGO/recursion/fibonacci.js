/**
 * Given a number find the fibonacci number on given index
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34..
 * 
 */

 function fibonacciIterativeSeries (num) {
    let first = 0;
    let second = 1;
    let result = 0;
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    for (let i=2; i <= num; i++) { // O(2)
        result = first + second;
        first = second;
        second = result;
    }
    console.log(result);
    return result;
 }

 function fibonacciRecursiveSeries(num) {
    return fibonacciTest(0, 1, 2, num);
 }

 /**
  * 
  * @param {*} first 
  * @param {*} second 
  * @param {*} count 
  * @param {*} num 
  * Lengthier way
  */
 function fibonacciTest(first, second, count, num) {
    let result = first + second;
    first = second;
    second = result;
    count = count + 1;
    if (count <= num) 
        fibonacciTest(first, second, count, num);
    else
        console.log(result);
        return result;

 }

 /**
  * 
  * @param {*} num 
  * Sorter way
  */
 function fibonacciRecursive(num) {
    if (num < 2) {
        return num;
    }
    return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)
 }

 fibonacciIterativeSeries(40);
//  fibonacciIterativeSeries(8);
//  fibonacciRecursiveSeries(7)
//  fibonacciRecursiveSeries(8)
//  console.log(fibonacciRecursive(7))
 console.log(fibonacciRecursive(40)) // this will wait since it takes exponential time (2^n)