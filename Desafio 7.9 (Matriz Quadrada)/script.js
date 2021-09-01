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

/*() for p/ entrada
() index p/ controlar onde fica o 1
() */

