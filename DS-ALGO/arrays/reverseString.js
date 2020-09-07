
function reversString(str) {

    if(str || str.length >= 2) {
        let newStr = []
        for (let i=str.length-1; i>=0; i--) {
            newStr.push(str[i])
        }
        console.log(newStr)
        console.log(newStr.join(''))
        return newStr.join('')
    } else {
        return str
    }
}

function reversStringShort(str) {
    if(str || str.length >= 2) {
        return str.split('').reverse().join('')
    } else {
        return str
    }
}

const reverseString1 = str => str.split('').reverse().join('')

// reversString('This is ritesh chauhan')
// console.log(reversStringShort('Hi ritesh this is me'))
console.log(reverseString1('Hi Ritesh I am chauhan'))
