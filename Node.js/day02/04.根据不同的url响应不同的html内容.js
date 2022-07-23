const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // 获取请求url地址
    const url = req.url;
    // 设置默认的响应内容 404 Not Found
    let content = '<h1>404  Not found</h1>';
    // 判断用户请求的是否为 / 或 index.html 首页
    // 判断用户请求的是否为/about.html 关于页面
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    }else if(url==='/about.html'){
        content='<h1>关于页面</h1>';
    }
    // 设置Content-Type 响应头 ,防止中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8');
    // 使用res.end() 把内容响应给客户端
    res.end(content);
})
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})