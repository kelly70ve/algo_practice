function primeFactors(num) {
  var divisor = 3;
  var primeFactorsArr = [];
  while (divisor < num) {
    if (num % divisor === 0) {
      primeFactorsArr.push(divisor);
    }
    divisor = divisor + 2;
  }
  return primeFactorsArr;
}

console.log(primeFactors(69));
