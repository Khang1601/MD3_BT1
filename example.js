/* Khai báo biến http có giá trị là thư viện http (có sẵn trong node) */
var http = require('http');


//create a server object:
const server = http.createServer((req, res) =>{
    console.log("đã vào !")

    // add a HTTP header:
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('Hello World!'); //write a response to the client

    res.end(); //end the response
})

//the server object listens on port 3000
server.listen(3000, () => {
    console.log("Server đã khởi chạy tại port 3000 của máy tính!")
})