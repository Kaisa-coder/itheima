const express = require('express');
const app = express();
// 挂载路由
app.get('/', (req, res) => {
    res.send('hello World!')
})
app.post('/', (req, res) => {
    res.send('Post request.')
})
app.listen(80, () => {
    console.log('http://127.0.0.1');
})