const http = require('http')
http.createServer((req,res)=> {
    res.end("Nhu nao cung duoc")
}).listen(5000)