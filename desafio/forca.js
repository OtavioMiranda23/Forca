class Forca {

  chutar(letra) {
    //Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada,
    // ou seja, não deve alterar nenhum estado.
    if (letra != null && letra.length == 1){
      letrasChutadas.push(letra);
    }

   }

  buscarEstado() {
    // Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para perdeu.
    return vidas == 0 && "perdeu"  

    //Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para ganhou.
    return vidas > 0 && palavra.includes(letrasChutadas[letrasChutadas.length - 1]) && "ganhou" // CONFERIR CÓDIGO!!!!!
    return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    //Se a letra chutada não estiver contida na palavra, deve subtrair uma vida

    letrasChutadas.forEach(letra => {
      if (!palavra.includes(letra)) {
        vidas --;
      }
    })
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
