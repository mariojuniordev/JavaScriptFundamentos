var colunas = 3;
var linhas = 5;

var colunasAux = '';

for (var i = 1; i <= colunas; i++){
  colunasAux += '*';
}

for (var i = 1; i <=linhas; i++){
  console.log(colunasAux);
}

