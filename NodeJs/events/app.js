const { lookup } = require('dns')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        console.log('Home Page')
        res.end('Home Page')
    } else if (req.url === '/aboutMe') {
        console.log('started')
        // this will stop the flow
        aboutMe()
        console.log('stopped')
        res.end('About Me')
    }
})

async function aboutMe() {
    await looktest()
}

async function looktest() {
    for (let i=0; i<1000; i++) {
        for (let j=0; j<1000; j++) {
            console.log('i and j', i, j);
        }
    }
}

server.listen(5001)