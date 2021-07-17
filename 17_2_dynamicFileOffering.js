const http = require('http');
const fs = require('fs');
const port = 3000
const host = '127.0.0.1'

const server = http.createServer( (req, res) => {
    let {url} = req;
    fs.readFile(`.${url}`, (err, data) => {
        if(!err){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            return res.end(data)
        }
        else if(err && err['errno'] === -2){
            res.writeHead(404, {'Content-Type' : 'text/plain'})
            return res.end('not found file')
        }
        res.writeHead(500)
        return res.end('server error!')
    })
})

server.listen(port, host, () => {
    console.log('서버가 실행되고 있어여 :)')
})