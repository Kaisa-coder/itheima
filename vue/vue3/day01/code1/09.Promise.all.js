import thenFs  from "then-fs";
const promiseArr=[
  thenFs.readFile('./flies/1.txt','utf-8'),
  thenFs.readFile('./flies/2.txt','utf-8'),
  thenFs.readFile('./flies/3.txt','utf-8'),
]
Promise.all(promiseArr).then(result=>{
  console.log(result);
})
const promiseArr1=[
  thenFs.readFile('./flies/1.txt','utf-8'),
  thenFs.readFile('./flies/2.txt','utf-8'),
  thenFs.readFile('./flies/3.txt','utf-8'),
]
Promise.race(promiseArr1).then(result=>{
  console.log(result);
})