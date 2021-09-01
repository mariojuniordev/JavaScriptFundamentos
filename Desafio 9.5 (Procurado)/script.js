var procurado = 5;

var numeros = [1, procurado, 2]

for (var i = 0; i < numeros.length; i++){
  if(numeros[i] == procurado){
    numeros.splice(i, 1);
  }
}

console.log(...numeros);