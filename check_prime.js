function checkPrime(num) {
  if (num % 2 === 0) {
    return false; // This is only checking for even vs odd
  } else {
    return true;
  }
}

checkPrime(237); // true

// Source: http://thatjsdude.com/interview/js1.html
// A prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1.

function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
}

isPrime(137); // true
isPrime(237); // false
