let range = function(start, end, step) {
  let countArray = [];
  if(start === undefined || end === undefined || step === undefined){
    return countArray;
  } else if(start > end || step <= 0){
    return countArray;
  } else {
    while(start <= end){
      countArray.push(start);
      start = start + step;
    }
  }
  return countArray;
}

console.log(range(0, 10, 2));