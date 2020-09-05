/**
 * If we have nested loops then it mostly O(N^2)
 */

function nestedLoopFunc(valArr) {

    for (let i=0; i<valArr.length; i++) {
        for (let j=0; j<valArr.length; j++) {
            console.log(valArr[i], valArr[j])
        }
    }
}

 // Quardatic rule O(n^2) call
let valArr = ['a', 'b', 'c', 'd', 'e']
nestedLoopFunc(valArr)