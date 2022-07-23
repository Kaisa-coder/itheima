// 导入fs模块
const fs = require('fs');
// 调用fs.readFile()读取文件的内容
fs.readFile('./素材/成绩.txt', 'utf8', function (err, dataStr) {
    // 判断是否读取成功
    if (err) {
        return console.log('读取文件失败！ ' + err.message);
    }
    // console.log('读取文件成功' + dataStr);
    // 先将成绩的数据按照空格分割
    const arrOld = dataStr.split(' ');
    // 循环分割后的数组,对每一项数据进行字符串的替换操作
    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    // 将新数组的每一项进行合并,得到一个新的字符串
    const newStr = arrNew.join('\r\n');
    // 调用fs.writeFile()方法 将处理完毕的成绩,写入都新文件中
    fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件失败! ' + err.message);
        }
        console.log('成绩写入成功!');
    })
});