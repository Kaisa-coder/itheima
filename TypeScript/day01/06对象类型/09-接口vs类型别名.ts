/* interface IPerson{
  name:'zs';age:number;sayHi():void
} */
type IPerson={
  name:string;
  age:number;
  sayHi():void
}
let person:IPerson={
  name: "zs",
    age:20,
    sayHi() {},
}


