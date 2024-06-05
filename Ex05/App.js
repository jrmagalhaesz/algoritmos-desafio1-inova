
const frase = "What is Lorem Ipsum?";

function contarPalavras(frase) {
  
  const palavras = frase.split(' ');
 
  return palavras.length;
}

const numeroPalavras = contarPalavras(frase);

console.log("Número de palavras na frase:", numeroPalavras);
