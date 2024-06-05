const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia(notas) {
  var soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  return (soma / notas.length).toFixed(1);
}

function coletarNotas(nome, numeroDeNotas, notas) {
  if (notas.length === numeroDeNotas) {
   
    const media = calcularMedia(notas);

    console.log(`Nome: ${nome}`);
    console.log(`Notas: ${notas}`);
    console.log(`Média final: ${media}`);

    rl.close();
  } else {
    rl.question(`Digite a nota ${notas.length + 1}: `, (nota) => {
      notas.push(parseInt(nota));
      coletarNotas(nome, numeroDeNotas, notas);
    });
  }
}

rl.question('Digite o nome do aluno: ', (nome) => {
  rl.question('Digite o número de notas: ', (numeroDeNotas) => {
    coletarNotas(nome, parseInt(numeroDeNotas), []);
  });
});

  


