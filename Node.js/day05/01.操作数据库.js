//导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',//数据库的IP
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'//指定要操作的数据库
});

// 测试mysql模块能否正常工作
/* db.query('select 1', function (err, rusults) {
    //  mysql工作期间报错了
    if(err) return console.log(err.message);
    // 能够成功的执行sql语句 [ RowDataPacket { '1': 1 } ]
    console.log(rusults);
}) */

// 查询 users 表中所有的数据
/* const sqlStr = 'select * from users';
db.query(sqlStr, (err, results) => {
    // 查询数据失败
    if (err) return console.log(err.message);
    // 查询数据成功
    // 注意：如果执行的是select 查询语句 则结果是数组
    console.log(results);
}) */

// 向users表中新增数据 其中username 为Spider-Man,password为pcc321
/* const user = { username: 'Spider-Man', password: 'ppc321' };
// 定义待执行的sql语句
const sqlStr = 'insert into users (username,password) values(?,?)';
// 执行sql语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 执行失败
    if (err) return console.log(err.message);
    // 执行成功 
    // 注意：如果执行的 insert into 语句，则results是一个对象
    // 可以通过affectedRows属性判断是否插入成功
    if (results.affectedRows == 1) {
        console.log('插入数据成功');
    }
})*/

//演示插入数据的便捷方式 
/* const user = { username: 'Spider-Man2', password: 'ppc4321'};
// 定义待执行的sql语句
const sqlStr='insert into users set ?';
// 执行sql语句
db.query(sqlStr,user,(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows==1){
        console.log('插入数据成功');
    }
}) */

// 演示如何更新用户信息
/* const user = { id: 18, username: 'aaa', password: '000' }
// 定义sql语句
const sqlStr = 'update users set username=? , password=? where id=?'
// 执行sql语句
db.query(sqlStr, [user.username, user.password, user.id], (err, rusult) => {
    if (err) return console.log(err.message);
    // 注意：执行了update语句之后，执行的语句，也是一个对象，可以通过affectedRows判断是否更新成功
    if (rusult.affectedRows == 1) {
        console.log('更新数据成功');
    }
}) */

/* // 演示更新数据的便捷方式
const user = { id: 18, username: 'aaaa', password: '0000' }
// 定义sql语句
const sqlStr = 'update users set ? where id=?'
// 执行sql语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows=1){
        console.log('更新数据成功');
    }
})*/

/* // 删除id为18的用户 
const sqlStr='delete from users where id=?'
db.query(sqlStr,18,(err,results)=>{
    if(err) return console.log(err.message);
    // 注意：执行delete语句之后，结果也是一个对象，也会包含affectedRows属性
    if(results.affectedRows==1){
        console.log('删除数据成功');
    }
}) */

// 标记删除
const sqlStr='update users set status=? where id =?'
db.query(sqlStr,[1,17],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows==1){
        console.log('标记删除成功');
    }
})