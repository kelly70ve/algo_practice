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

// Did not solve correctly - 100 returns [5, 25] should only return 5
// Also 2 is a prime number!
primeFactors(69);

// Source: http://thatjsdude.com/interview/js1.html

function primeFactorsTwo(n) {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

// Solution almosts works but breaks at 100 - output is [2,2,5,5]
primeFactorsTwo(100);
