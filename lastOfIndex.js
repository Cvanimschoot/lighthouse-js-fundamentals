/*
let lastOfIndex = function(array, value) {
  let reversedArray = array.reverse();
  for(let i = 0; i < reversedArray.length; i++){
    if(reversedArray[i] === value){
      return array.length - i;
    } else if(reversedArray[i] !== value && i === reversedArray.length){
      return -1;
    } else {
      return undefined;
    }
  }
}
*/

let lastIndexOf = function(array, value) {
  let reversedArray = array.reverse();
  for(let i = 0; i <= reversedArray.length; i++){
    if(reversedArray[i] === value){
      return array.length - (i + 1);
    } else if(reversedArray.length === 0) {
      return -1;
    } else if(reversedArray[i] !== value && reversedArray.length === i){
      return -1;
    }
  }
}


console.log(lastIndexOf([0,1,4,1,2], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));