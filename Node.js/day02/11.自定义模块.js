// 在一个自定义模块中, 默认情况下,module.exports={}
const age = 20;
// 向model.exports对象上挂载一个username属性
module.exports.username = '张三';
// 向model.exports对象上挂载一个sayHello方法
module.exports.sayHello = function () {
    console.log('Hello');
}
module.exports.age = age;
// 让module.exports指向一个全新的对象
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi');
    }
}