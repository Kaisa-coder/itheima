enum Direction {
  Up='up',
  Down='down',
  Left='left',
  Right='right'
}
function changeDirection(direction:Direction){
  console.log(direction);
  
}
changeDirection(Direction.Left)