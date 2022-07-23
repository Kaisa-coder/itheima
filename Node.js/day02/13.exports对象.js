/* console.log(exports);
console.log(module.exports);
console.log(exports === module.exports); */
const username = '张三'
module.exports.username = username;
exports.age = 20;
exports.sayHello = function () {
    console.log('大家好!');
}
// 最终向外共享的结果,永远都是module.exports所指向的对象