interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () =>Type[]
}

let obj :IdFunc<number> = {
 id(value) {
  return value
 },
 ids() {
   return [1, 2,3]
 },
}
console.log(obj);
