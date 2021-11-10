const http = require('http')

const server= http.createServer( (req, res) => {
    if (req.url === '/') {
        res.end('this is home page')
    } else {
        res.end (`
        <h1> Oops no page found !!</h1>
        <a href='/'>Back Home</a>
        `)
    }
})

server.listen(5000)