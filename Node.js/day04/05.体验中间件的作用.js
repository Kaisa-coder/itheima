const express = require('express')
const app = express()
// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
    // 获取到请求到的时间
    const time = Date.now();
    //  为req对象,挂载自定义属性,从而把时间共享给后面的所有路由
    req.startTime = time;
    next();
})
app.get('/', function (req, res) {
    res.send('Home page'+req.startTime)
})
app.get('/user', function (req, res) {
    res.send('User page'+req.startTime)
})
app.listen(80, function () {

    console.log('http://127.0.0.1');
})
