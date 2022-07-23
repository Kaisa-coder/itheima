// 导入fs文件系统模块
const { log } = require('console');
const fs = require('fs');
// 调用fs.writeFile()方法,写入文件的内容
// 参数1:表示文件的存放路径
// 参数2:表示要写入的内容
fs.writeFile('./files/3.txt', 'ok123', 'utf8', function (err) {
    // 如果文件写入成功,则err的值为null 
    // 如果文件写入失败,则err的值为错误对象
    // console.log(err);
    if (err) {
        return console.log('文件写入失败！ '+err.message);
    }
    console.log('文件写入成功');
})
