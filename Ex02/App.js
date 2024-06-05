const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMenorNumero(numeros) {
  let menor = numeros[0];
  for (let numero of numeros) {
    if (numero < menor) {
      menor = numero;
    }
  }
  return menor;
}

function encontrarMaiorNumero(numeros) {
  let maior = numeros[0];
  for (let numero of numeros) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

rl.question('Digite os números separados por espaço: ', (numerosInput) => {

  const numeros = numerosInput.split(' ').map(numero => parseInt(numero));

  const menorNumero = encontrarMenorNumero(numeros);
  const maiorNumero = encontrarMaiorNumero(numeros);

  console.log(`Menor número: ${menorNumero}`);
  console.log(`Maior número: ${maiorNumero}`);

  rl.close();
});

