// Exercise 05
// Với mỗi lần gõ vào trình duyệt các đường dẫn như “/”, “/overview”, “/product” … Xem kết quả được hiển thị trên màn hình console
// Dựa vào req.url, sử dụng các câu lệnh if else để gửi về cho người dùng các dòng text sau
// “/”: This is homepage
// “/overview”: This is overview page
// “/product”: This is product page
// Các đường dẫn khác: PAGE NOT FOUND
// Vẫn trong file server.js, thay đổi phần res.setHeader từ “text/plain” → “text/html”, thay vì gửi về các đoạn text cơ bản ở các đường dẫn trên, bọc chúng lấy các thẻ h1. Chạy lại file server.js và xem kết quả



const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('---------------');

  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    console.log('req.url:', req.url);

    res.end('<h1>This is homepage</h1>');

  } else if (req.url == '/overview') {
    res.setHeader('Content-Type', 'text/html');
    console.log('req.url:', req.url);

    res.end('<h1>This is overview page</h1>');

  } else if (req.url == '/product') {
    res.setHeader('Content-Type', 'text/html');
    console.log('req.url:', req.url);

    res.end('<h1>This is product page</h1>');

  } else {
    res.setHeader('Content-Type', 'text/html');
    console.log('req.url:', req.url);

    res.end('<h1>PAGE NOT FOUND</h1>');
  }
});

server.listen(3000, () => {
  console.log("Server đã khởi chạy tại port 3000 của máy tính!")
});
