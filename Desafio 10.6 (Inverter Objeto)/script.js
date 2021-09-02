var meuObjeto = {"a": "b"};

function invertObj(meuObjeto){

  const newObj = {};
  const keys = Object.keys(meuObjeto);

  for (var i = 0; i < keys.length; i++){
    const key = keys[i];
    //p/ simular o x.prop dinamicamente é necessário usar os [prop] no lugar do .prop
    newObj[meuObjeto[key]] = key;
  }

  return newObj;

}

console.log(invertObj(meuObjeto));