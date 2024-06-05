const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularIdade(dataNascimento) {
  const anoAtual = new Date().getFullYear(); 
  const anoNascimento = new Date(dataNascimento).getFullYear(); 
  
  let idade = anoAtual - anoNascimento;

  const mesAtual = new Date().getMonth() + 1; 
  const diaAtual = new Date().getDate();
  const mesNascimento = new Date(dataNascimento).getMonth() + 1;
  const diaNascimento = new Date(dataNascimento).getDate();

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }

  return idade;
}

rl.question('Digite sua data de nascimento (no formato yyyy-MM-dd): ', (dataNascimento) => {

  const idade = calcularIdade(dataNascimento);
  
  console.log("Sua idade é:", idade);

  rl.close();
});

  
