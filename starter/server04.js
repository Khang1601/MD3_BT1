// Exercise 04
// Khởi tạo một web server gửi về cho người dùng thông tin của toàn bộ file final.txt tại localhost, cổng 3000
// Khởi tạo một Node.js project tại chính thư mục starter (npm init), cài đặt package nodemon → bên trong file package.json phần script, sửa lại property start với value “nodemon server.js”
// Chạy lại file server với dòng lệnh npm run start và xem kết quả

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});