var numero1 = 2;
var numero2;

function multiplicacao(numero1, numero2){
  
  if(numero2 === undefined){
    numero2 = 5;
  }

  return numero1*numero2
}

console.log(multiplicacao(numero1, numero2));

var a = 2
const double = function(a){return a*2;}
console.log(double())
