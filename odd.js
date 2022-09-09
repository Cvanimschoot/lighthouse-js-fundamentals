function isOdd(number) {
  let isOdd = number % 2 === 0
  if(isOdd === true){
    return false;
  } else {
    return true;
  }
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));