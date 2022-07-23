enum Direction {
  Up =10,
  Down =20,
  Left =15,
  Right=4
}
function changeDirection(direction:Direction){
  console.log(direction);
  
}
changeDirection(Direction.Left)