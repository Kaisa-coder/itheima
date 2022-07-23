import thenFS  from 'then-fs'
thenFS.readFile('./flies/1.txt','utf-8').then((r1)=>{console.log(r1);})
thenFS.readFile('./flies/2.txt','utf-8').then((r2)=>{console.log(r2);})
thenFS.readFile('./flies/3.txt','utf-8').then((r3)=>{console.log(r3);})
