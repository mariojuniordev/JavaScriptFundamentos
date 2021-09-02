var titulo = "abc";
var meusObjetos = [ { titulo: "abc", outroCampo: 123}, {titulo: "def", outroCampo: 321}]

function removeTitulo(meusObjetos, titulo){

  for(var i = 0; i < meusObjetos.length; i++){
  if((Object.values(meusObjetos[i])[i]) == titulo){
    console.log(meusObjetos[i]);
  }
}  

}

removeTitulo(meusObjetos, titulo);

/*
//Solução menos verbosa, porém, menos dinâmica

for(var i = 0; i < meusObjetos.length; i++){
  if(meusObjetos[i].titulo === titulo){
    console.log(meusObjetos[i]);
  }
}
*/ 