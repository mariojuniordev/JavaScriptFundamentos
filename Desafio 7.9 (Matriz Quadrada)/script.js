
var tamanho = 5;

for(let line = 0; line < tamanho; line++){
  let lineArray = '';
  for(let column = 0; column < tamanho; column++){
    lineArray += (line === column ? '1' : '0');
  }
  console.log(lineArray);
}

/*
var tamanho = 6;

var strAux = '';

for (var x = 0; x < tamanho ; x++) {
    for (var y = 0; y < tamanho ; y++) {
        if(x == y) {
            strAux += '1';
        }        
        strAux += '0';
    }
    strAux += "\n";
}

console.log(strAux);
*/