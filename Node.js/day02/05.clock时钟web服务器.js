// 导入http模块
const http = require('http');
// 导入fs模块
const fs = require('fs');
// 导入path模块
const path = require('path');
// 创建web服务器
const server = http.createServer();
// 监听web服务器的request事件
server.on('request', function (req, res) {
    // 获取到客户端请求的url地址
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js
    const url = req.url;
    // 把请求的url地址,映射为本地文件的存放路径
    // const fpath = path.join(__dirname, url);
    let fpath='';
    if(url=='/'){
        fpath=path.join(__dirname,'./clock/index.html')
    }else{
        fpath=path.join(__dirname,'./clock',url);
    }
    // 根据"映射"过来的文件路径读取文件
    
    fs.readFile(fpath, 'utf8', function (err, dataStr) {
        // 读取文件失败后,向客户端响应固定的"错误信息"
        if (err) {
            return res.end("404 Not found!");
        }
        // 读取文件成功后,将"读取成功的内容"响应给客户端
        res.end(dataStr);
    })
})
// 启动服务器
server.listen(80, function () {
    console.log('server listen at http://127.0.0.1');
})