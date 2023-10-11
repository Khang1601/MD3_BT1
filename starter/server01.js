// Exercise 01
// Sử dụng hàm readFileSync để đọc file read-this.txt và log toàn bộ kết quả ra màn hình console
// Sử dụng hàm readFileSync để đọc file input.txt, file append.txt và log toàn bộ kết quả ra màn hình console
// Sử dụng hàm writeFileSync để nối kết quả của 2 file trên với nhau và ghi dữ liệu vào file final.txt

var http = require('http');
var fs = require('fs');


const server = http.createServer(function (req, res) {

// Sử dụng hàm readFileSync để đọc file read-this.txt và log toàn bộ kết quả ra màn hình console
const readThisContent = fs.readFileSync('./starter/txt/read-this.txt', 'utf-8');
console.log('Nội dung của file read-this.txt:',readThisContent);


console.log("===========================================");
// Sử dụng hàm readFileSync để đọc file input.txt, file append.txt và log toàn bộ kết quả ra màn hình console
const inputContent = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
const appendContent = fs.readFileSync('./starter/txt/append.txt', 'utf-8');
console.log('Nội dung của file input.txt:',inputContent);
console.log('Nội dung của file append.txt:',appendContent);


console.log("===========================================");
//Sử dụng hàm writeFileSync để nối kết quả của 2 file trên với nhau và ghi dữ liệu vào file final.txt
const finalContent = inputContent + appendContent;
fs.writeFileSync('./starter/txt/final.txt', finalContent);
console.log('Nội dung file final.txt:', finalContent);

// res.write();
res.end();
})



server.listen(3000, () => {
    console.log("Server đã khởi chạy tại port 3000 của máy tính!")
})