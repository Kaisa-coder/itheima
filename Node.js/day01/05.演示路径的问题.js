const { log } = require('console');
const fs = require('fs');
// 出现路径拼接错误的问题,是因为提供了./或../开头的相对路径
// 如果要解决这个问题,可以提供一个完整的文件存放路径
/* fs.readFile('./files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败!' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
}) */
// 移植性非常差 不利于维护
/* fs.readFile('E:\\VScode\\黑马程序员\\Node.js\\day01\\files\\1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败! ' + err.message);
    }
    console.log('读取文件成功! ' + dataStr);
}) */
// __dirname 表示当前文件所处的目录
console.log(__dirname);
fs.readFile(__dirname + '/files/1.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败! ' + err.message);
    }
    console.log('读取文件成功! ' + dataStr);
})
