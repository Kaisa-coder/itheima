const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('调用了第一个全局中间件');
    next();
})
app.use((req, res, next) => {
    console.log('调用了第二个全局中间件');
    next();
})
app.get('/user',(req,res)=>{
    res.send('User page.')
})
app.listen(80, () => {
    console.log('http://127.0.0.1');
})