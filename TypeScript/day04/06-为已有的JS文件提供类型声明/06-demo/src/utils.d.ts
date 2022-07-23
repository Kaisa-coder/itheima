declare let count:number
declare let songName:string
interface Point {
  x:number
  y:number
}
declare let position:Point

declare function add(x:number,y:number): number

declare function changeDirection (direction:'up'| 'down'| 'left' | 'right'):void

type FomartPoint =(point :Point) => void

declare const fomartPoint:FomartPoint 

export {
  count,
  songName,
  position,
  add,
  changeDirection,
  fomartPoint,
  Point,

}