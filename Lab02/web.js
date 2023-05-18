//Taoj web server voi NodeJS
//1. Khai bao va import thu vien http

const http = require('http')
//2. Khai bao host (server)
const host = 'localhost'
//3. Khai bao server port (default : 3000)
const port = 3000
//4. Tao server
//const server = http.createServer(function(request,respond) => {})
const server = http.createServer((request,respond) => {
    respond.write("<h1 style ='color : red;'>This is NodeJS web server</h1>")
    respond.write("<h2 style ='color : blue;'>Em Iu</h2>")
    respond.end("<img src='https://ss-images.saostar.vn/wp700/pc/1601737636922/092116_han_hang_3.jpg'>")
})
//5. Chay server bang cach Listen port
server.listen(port,()=>{
    console.log("Web server is running at http://" + host + ":" + port)
})