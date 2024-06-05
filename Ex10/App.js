
const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";

function contarLetrasMaiusculas(texto) {
  let count = 0;
  for (let i = 0; i < texto.length; i++) {
    
    if (texto[i] >= 'A' && texto[i] <= 'Z') {
      count++;
    }
  }
  return count;
}

const numeroLetrasMaiusculas = contarLetrasMaiusculas(texto);

console.log("O número de letras maiúsculas na string é:", numeroLetrasMaiusculas);
