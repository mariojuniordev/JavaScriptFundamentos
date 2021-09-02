let elevador = {
  totalAndares: 3,
  andarAtual: 0,
  subir() {
    if (this.andarAtual < 3){
      this.andarAtual++;
    } 
    return this.andarAtual;
  },
  descer() {
    if (this.andarAtual > 0){
      this.andarAtual--;
    }
    return this.andarAtual;
  }
}

