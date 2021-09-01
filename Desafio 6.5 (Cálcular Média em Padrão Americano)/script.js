var a = 5;
var b = 7;
var c = 6;
var d = 8;

var conceito = 0;

var media = (a + b + c + d)/4;

if (media >= 9 && media <= 10){
  conceito = 'A';
} else if (media >= 7.5 && media <= 8.9){
  conceito = 'B';
} else if (media >= 6.0 && media <=7.4){
  conceito = 'C';
} else if (media >= 4.0 && media <= 5.9){
  conceito = 'D';
} else{
  conceito = 'F';
}

console.log(conceito);
