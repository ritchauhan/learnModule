
/**
 * Fibonacchi number with dynamic programming
 * Because of DP, time complexity improves to O(n)
 */

 let calculation = 0;

 function FibonacchiDpSeries() {
     let cache = {};
     return function fib(n) {
         calculation ++;
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
     }
 }

 let fibDpFunction = FibonacchiDpSeries();
 console.log(fibDpFunction(50));
 console.log('total calculation : ', calculation)