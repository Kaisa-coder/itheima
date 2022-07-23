// 导入fs模块
const fs = require('fs');
const { resolve } = require('path');
// 导入path模块
const path = require('path');
// 定义正则表达式 分别匹配style 和 script 标签
// \s匹配空白字符 \S匹配非空白字符
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
// 调用fs.readFile() 读取文件
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf8', function (err, dataStr) {
    // 读取HTML文件失败
    if (err) {
        return console.log('读取HTML文件失败！ ' + err.message);
    }
    // 读取文件成功后,调用对应的三个方法 分别拆解出css js html文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr)

})
// 定义处理css样式的方法
function resolveCSS(htmlStr) {
    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // 将提取出来的样式字符串进行字符串的replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // console.log(newCSS);
    // 调用fs.writeFile()方法,将提取的样式写入clock目录中 index.css
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, function (err) {
        if (err) {
            return console.log('写入CSS样式失败！' + err.message);
        }
        console.log('写入CSS样式成功！');
    });

}
// 定义处理js脚本的方法
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr);
    const newJS = r2[0].replace('<script>', '').replace('</script>', '');
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, function (err) {
        if (err) {
            return console.log('写入JS失败！' + err.message);
        }
        console.log('写入JS成功！');
    })
}
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>');
    fs.writeFile(path.join(__dirname, "/clock/index.html"), newHTML, function (err) {
        if (err) {
            return console.log('写入HTML文件失败！' + err.message);
        }
        console.log("写入HTML文件成功");
    })
}