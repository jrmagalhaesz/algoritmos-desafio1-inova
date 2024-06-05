
function calcularFatorial(numero) {
    
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
     
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }

  const fatorialDe12 = calcularFatorial(12);

  console.log("O fatorial de 12 é:", fatorialDe12);
  