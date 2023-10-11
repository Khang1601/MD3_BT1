// Exercise 02
// Tìm hiểu về 2 hàm có sẵn readFile() và writeFile() dùng để đọc và ghi file trong Node.js theo dạng bất đồng bộ (Asynchronous) sử dụng Callback style

var http = require('http');
var fs = require('fs');

const server = http.createServer(function (req, res) {

    // Sử dụng hàm readFile để đọc file read-this.txt và log toàn bộ kết quả ra màn hình console
    fs.readFile('./starter/txt/read-this.txt', 'utf-8', (err, readThisContent) => {
        if (err) {
            console.error('Lỗi khi đọc file read-this.txt:', err);
            return;
        }
        console.log('Nội dung của file read-this.txt:',readThisContent);
       

        // Sử dụng hàm readFile để đọc file input.txt, file append.txt và log toàn bộ kết quả ra màn hình console
        fs.readFile('./starter/txt/input.txt', 'utf-8', (err, inputContent) => {
            if (err) {
                console.error('Lỗi khi đọc file input.txt:', err);
                return;
            }
            console.log('Nội dung của file input.txt:',inputContent);
         

            
            fs.readFile('./starter/txt/append.txt', 'utf-8', (err, appendContent) => {
                if (err) {
                    console.error('Lỗi khi đọc file append.txt:', err);
                    return;
                }
                console.log('Nội dung của file append.txt:',appendContent);
               
                
                //Sử dụng hàm writeFile để nối kết quả của 2 file trên với nhau và ghi dữ liệu vào file final.txt
                const finalContent = inputContent + appendContent;
                fs.writeFile('./starter/txt/final.txt', finalContent, (err) => {
                    if (err) {
                        console.error('Lỗi khi ghi file final.txt:', err);
                        return;
                    }
                    console.log('Nội dung file final.txt:', finalContent);
                });
            });
        });
    });

    res.end();
})

server.listen(3000, () => {
    console.log("Server đã khởi chạy tại port 3000 của máy tính!")
})