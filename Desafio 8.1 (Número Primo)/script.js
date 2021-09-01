var numero = 3;

function primo(numero){
  
  var qtdDivisores = 0;
  
  for (var i = 1; i <= numero; i++){
    if(numero % i == 0) {
      qtdDivisores++;
    }
  }

  if(qtdDivisores == 2){
    return true;
  } else {
    return false;
  }

}

console.log(primo(numero));