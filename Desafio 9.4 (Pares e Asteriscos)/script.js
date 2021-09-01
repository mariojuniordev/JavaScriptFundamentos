//Retornar o próprio número do array caso o número seja par e reotornar '*' caso seja ímpar

var numeros = [1, 5, 3, 2, 7, 8, 9, 4];

numeros2 = numeros.map( n => {
  if(n % 2 == 0){
    return n;
  } else {
    return '*';
  }
} )

console.log(...numeros2)