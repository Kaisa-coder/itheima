interface Props {
  id: string
  children: number[]
}

type PartialPros =Partial<Props>
let p1:Props ={
  id:'',
  children:[1]
}
let p2:PartialPros ={
  id:'',
  children:[1]
}