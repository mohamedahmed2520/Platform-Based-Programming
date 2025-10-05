let primeNum = parseInt(prompt("Enter a number:"));
let isPrime = true;

if (primeNum <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
