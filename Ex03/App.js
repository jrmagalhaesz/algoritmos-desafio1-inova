
const frascos = [12, 5, 23, 17, 8, 14, 3, 19];

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const frascosOrdenados = bubbleSort(frascos);

console.log("Frascos ordenados:", frascosOrdenados);
