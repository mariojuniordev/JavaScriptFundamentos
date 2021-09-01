//Criar uma função que recebe numero como parametro e retorna uma arrow function 
//Se o numero recebido for par, retornar numero*2, se for ímpar, retornar numero*3

var numero = 4;

function arrowFunction(numero){
  return (numero) => numero % 2 == 0 ? numero*2 : numero*3;
}

console.log(arrowFunction(numero));