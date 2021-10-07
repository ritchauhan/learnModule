const os = require('os')

// getting user info with os module
const user = os.userInfo()
console.log(user)

// some more example
console.log('up time: ', os.uptime())

const osTest = {
    name: os.type(),
    mem: os.totalmem(),
    free: os.freemem()
}

console.log(osTest)