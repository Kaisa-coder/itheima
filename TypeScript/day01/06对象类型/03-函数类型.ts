function add(num1:number,num2:number) :number {
  return num1+num2
}
const add1=(num1:number,num2:number):number=>{
  return num1+num2
}
console.log(add(1,2));
console.log(add1(2,2));

const add2:(num1:number,num2:number)=>number=(num1,num2)=>{
  return num1+num2
}
