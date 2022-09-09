const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

var finalPosition = function(moves) {
  let finalPosition = [0,0];

  for(let i = 0; i < moves.length; i++){
    switch(moves[i]) {
    case 'north':
      finalPosition[1] = finalPosition[1] + 1;
      break;
    case 'south':
      finalPosition[1] = finalPosition[1] - 1;
      break;
    case 'east':
      finalPosition[0] = finalPosition[0] + 1;
      break;
    case 'west':
      finalPosition[0] = finalPosition[0] - 1;
      break;
    }
  }
  return finalPosition;
}

finalPosition(moves);
console.log(finalPosition(moves));