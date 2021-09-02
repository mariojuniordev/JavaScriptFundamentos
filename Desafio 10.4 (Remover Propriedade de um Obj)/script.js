var meuObjeto = {'a': 1, 'b': 2, 'c': 3};

function removeProperty(meuObjeto){
var arrayValues = Object.values(meuObjeto)

var smallestValue = arrayValues[0];

for (var i = 0; i < arrayValues.length -1; i++){
  if(arrayValues[i] < smallestValue){
    smallestValue = arrayValues[i];
  }
}

var arrayKeys = Object.keys(meuObjeto);

for (var i = 0; i < arrayKeys.length -1; i++){
  if(smallestValue == meuObjeto[arrayKeys[i]]){
    delete meuObjeto[arrayKeys[i]];
  }
}

return meuObjeto;

}

console.log(removeProperty(meuObjeto))

/*
const campos = Object.keys(meuObjeto);
let menorPropriedade = campos[0];
let menorPropriedadeValor = meuObjeto[menorPropriedade];

for (let i = 1; i < campos.length; i++){
    if(meuObjeto[campos[i]] < menorPropriedadeValor){
        menorPropriedade = campos[i];
        menorPropriedadeValor = meuObjeto[menorPropriedade];
    }
}

delete meuObjeto[menorPropriedade];

return meuObjeto;
*/