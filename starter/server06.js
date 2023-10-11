// Exercise 06
// Vẫn trong file server.js, thay đổi phần res.setHeader từ “text/plain” → “application/json”
// Đọc toàn bộ dữ liệu từ file data.json trong thư mục dev-data, log ra màn hình console và xem kết quả
// Parse dữ liệu dạng JSON về dạng object thông thường
// Sử dụng if else tạo thêm một đường dẫn “/api”
// Gửi toàn bộ dữ liệu lấy từ file data.json về cho người dùng khi truy cập vào đường dẫn “/api”
// Chạy lại file server.js và xem kết quả
// Vẫn trong file server.js
// “/api/ id” ,{id} là thứ tự của các object con nằm trong mảng dữ liệu lấy từ data.json → gửi về dữ liệu thứ tự của object đó nằm trong file data.json


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

    } else if (req.url == '/api') {
        console.log('req.url:', req.url);

        fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => {

            // Parse JSON
            const jsonData = JSON.parse(data);
            console.log(data);


            const rikkeiFarmProducts = jsonData.rikkeiFarm;


            rikkeiFarmProducts.forEach(product => {
                console.log("ID:", product.id);
                console.log("Name:", product.name);
                console.log("Price:", product.price);
                console.log("--------");
            });

            // res.setHeader('Content-Type', 'application/json');
            // res.end(JSON.stringify(jsonData));

        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        console.log('req.url:', req.url);

        res.end('<h1>PAGE NOT FOUND</h1>');
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server đã khởi chạy tại port 3000 của máy tính!")
});