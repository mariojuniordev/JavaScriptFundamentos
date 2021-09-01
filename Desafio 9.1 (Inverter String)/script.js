//Criar uma função que recebe uma string qualquer e retorna seu valor invertido

function invertStr(palavra){
  var strAux = '';
    
  for (var i = palavra.length-1; i >= 0; i--){
    strAux += palavra[i];
  }

  return strAux;

}

console.log(invertStr('GadoDemais'));