import thenFs from "then-fs";
console.log('A');
async function getAllFile(){
  console.log('B');
  const r1= await thenFs.readFile('./flies/1.txt','utf-8')
  console.log(r1);
  const r2=await thenFs.readFile('./flies/2.txt','utf-8')
  console.log(r2);
  const r3= await thenFs.readFile('./flies/3.txt','utf-8')
  console.log(r3);
  console.log('D');
}
getAllFile()
console.log('C');