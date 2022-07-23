interface AnyObject {
  [key:string]:number
}
let obj :AnyObject ={
  a:1,
  abc:123,
  dad:121
}

const arr=[1,2,3]
arr.forEach
interface MyArray<Type> {
  [index:number]:Type
}
let arr1:MyArray<number> =[1,2,3]
arr1[0]