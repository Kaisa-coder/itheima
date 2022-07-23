console.log(typeof 'hello');

let p= {x:1,y:2}
// function formatPoint(point:{x:number;y:number}){}
// formatPoint(p)
// function formatPoint(point: typeof p){}
function formatPoint(point:{x:number;y:number}){}
formatPoint({x:1,y:100})
let num :typeof p.x
function add(num1:number,num2:number){
  return num1+num2
}
// typeof 只能查询变量或者属性的类型
// let ret:typeof add(1,2)