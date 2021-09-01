function removeVowels(frase){

  var frase = 'ola web developers';
  //.split() transforma uma string em array
  var newFrase = frase.split('');

  for (var i = 0; i < newFrase.length-1; i++){
    if(newFrase[i] == 'a' || newFrase[i] =='e' || newFrase[i] =='i'|| newFrase[i] =='o'|| newFrase[i] =='u'){
      newFrase[i] = ' ';
    }
  }
  console.log(...newFrase);
}

removeVowels();
