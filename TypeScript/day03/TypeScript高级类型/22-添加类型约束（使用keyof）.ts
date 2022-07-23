function getProp<Type,Key extends keyof Type>(obj:Type,key:Key){
  return obj[key]
}

let person ={ name:'jack' , age: 18 }
getProp(person,'name')
getProp(18,"toString")
getProp('abc','length')
console.log('object'[1]);
getProp(['a'],'length')
