// Exercise 03
// Từ Exercise 01 và 02, tìm hiểu thế nào là blocking và non-blocking, cơ chế bất đồng bộ (Asynchronous) của Node.js


// Blocking 
// Chặn luồng thực thi cho đến khi hoàn thành tác vụ
// Khi một tác vụ là blocking, nó đồng bộ và chặn thực thi của mã chương trình cho đến khi tác vụ đó hoàn thành. Trong trường hợp một tác vụ mất thời gian, toàn bộ ứng dụng sẽ bị chặn và không thể thực hiện bất kỳ công việc nào khác trong thời gian đó


// Non-blocking 
// Cho phép tiếp tục thực hiện các tác vụ khác mà không cần chờ đợi.
// Khi một tác vụ là non-blocking, nó được thực hiện bất đồng bộ, cho phép mã tiếp tục thực thi mà không cần chờ tác vụ đó hoàn thành. Kết quả của tác vụ non-blocking thường được xử lý thông qua callback hoặc Promise khi nó hoàn thành