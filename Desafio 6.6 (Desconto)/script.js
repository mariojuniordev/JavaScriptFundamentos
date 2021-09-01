var quantidade = prompt('Digite a quantidade de produtos que você deseja: ');

var valorFinal = 0;

if (quantidade >=25){
  valorFinal = quantidade*4.85;
} else {
  valorFinal = quantidade*5.5;
}

console.log(valorFinal.toFixed(2));