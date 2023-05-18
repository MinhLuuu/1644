const http = require('http')
const host ='localhost'
const port = 3333
const server = http.createServer((req,res)=>{
    switch(req.url){
        case '/' :
            res.write("<h1>Homepage</h1>")
            res.write("<a href = '/login'>Login</a><br>")
            res.write("<a href = '/contact'>Contact</a><br>")
            break
        case '/login' :
            res.end("<h1>Login Pgae</h1>")
            break
        case '/contact' :
            res.end("<h1 style = ' color : red';>Contact Page</h1>")
            break
        default:
            res.end("<h1 style = ' color = red';>404 not found</h1>")
            break
    }
})
server.listen(port,()=>{
    console.log('http://localhost'+port)
})