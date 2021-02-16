/**
 * Calculate factorial iterative or non interative way
 */

 function iteraiveFactorial(num) {
    let factorial = num;
    for (let i=num-1; i >0; i--) {
        factorial *= i;
    }
    console.log(factorial)
    return factorial;
 }

 function recursiveFactorial(num) {
    if(num === 2) {
        return 2;
    } 
    return num * recursiveFactorial(num-1); 
 }

 // factorials
 iteraiveFactorial(5);
 iteraiveFactorial(6);
 console.log(recursiveFactorial(5))