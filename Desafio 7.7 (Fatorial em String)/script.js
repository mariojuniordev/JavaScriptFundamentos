var numero = 5;

var fatorial = 1;

for (let i = numero; i >= 1; i--){
  fatorial *= i;
}

var strAux = '';

for (let i = numero -1; i >= 1; i--){
  strAux += ` x ${i}`;
}

console.log(`${numero}! = ${numero}${strAux} = ${fatorial}`)

