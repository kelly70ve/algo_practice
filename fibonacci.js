// How to get the nth Fibonacci number

function fibNumber(num) {
  var fib = [0, 1];
  var i = 0;
  var j = 1;
  if (num > 2) {
    while (j !== num) {
      fib.push(fib[i] + fib[j]);
      i++;
      j++;
    }
  }
  return fib[num];
}

fibNumber(14);
