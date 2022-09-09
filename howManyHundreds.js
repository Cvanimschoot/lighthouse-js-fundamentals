let howManyHundreds = function (num) {
  let numInHundreds = num - (num % 100);
  if (numInHundreds !== 0) {
    numInHundreds = numInHundreds / 100;
    return numInHundreds;
  } else {
    return numInHundreds;
  }
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(99));