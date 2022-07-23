const http = require('http');
const server = http.createServer();
// req是请求对象 包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    const str = `Your request url is ${url}, and request method is ${method}你2312大青蛙多群无2还`;
    console.log(str);
    // 调用res.end() 方法,向客户端响应一些内容
    res.end(str)
})
server.listen(80, () => {
    console.log('Server running at http://127.0.0.1');
})