
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
 
  const primos = [];
  
  for (let num of numeros) {
    if (isPrime(num)) {
      primos.push(num);
    }
  }
  
  console.log("Números primos:", primos);
  