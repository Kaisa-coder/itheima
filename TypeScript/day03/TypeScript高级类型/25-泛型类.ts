// class GenericNumber<NumType> {
//   dafaultValue:NumType;
//   add:(x:NumType,y:NumType)=>NumType
//   constructor(value:NumType){
//     this.dafaultValue=value
//   }
// }
// 此时可以省略<类型>
// const myNum=new GenericNumber(100)
// myNum.dafaultValue=10
class GenericNumber<NumType> {
  dafaultValue:NumType;
  add:(x:NumType,y:NumType)=>NumType
}
// 这种情况下，推荐明确指定<类型>
const myNum=new GenericNumber<number>()
myNum.dafaultValue=10