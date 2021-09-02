function criarObjeto(){
  var personagem = {
    raca: 'Golden retriever',
    latir(){
      console.log('au au');
    }
  }

  return personagem;

}

const cachorro = criarObjeto();
console.log(cachorro.raca);
cachorro.latir();