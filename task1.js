function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i < 21; i++) {
  console.log(isPrime(i))
}
