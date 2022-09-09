let ageCalculator = function (name, yearOfBirth, currentYear) {
  let ageString = `${name} is ` + (currentYear - yearOfBirth) + ' years old.';

  return ageString
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));