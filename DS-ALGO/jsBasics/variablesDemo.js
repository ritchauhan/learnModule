/**
 * 
 * Var is global variables and let and const in scope variable.
 * Only difference b/w let and const is that we can't any other value to const.
 */

'use strict'
function varDemo () {

    console.log(i) // undefined
    // j is not defined
    // console.log(j) 
    // c is not defined
    // console.log(c)

    if(1 == 1) {
        var i = 100;
        console.log(i)
        let j = 200;
        console.log(j)
        const c = 1000
        console.log(c)
    }

    // c = 2000; // c is not defined
    // console.log(c)
}

varDemo()