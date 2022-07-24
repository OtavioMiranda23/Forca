class Forca {

  chutar(letra) {
    //Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada,
    // ou seja, não deve alterar nenhum estado.
    if (letra != null && letra.length == 1){
      letrasChutadas.push(letra);
    }

   }

  buscarEstado() {
    //O jogo deve iniciar com o estado aguardando chute.
    let estado = "aguardando chute";

    // Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para perdeu.
    return vidas == 0 && "perdeu"  

    //Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para ganhou.
    // FAZER POR ARRAY E VERIFICAR QUANDO ELE ESTIVER VAZIO
    return vidas > 0 && palavra.includes(letrasChutadas[letrasChutadas.length - 1]) && "ganhou" // CONFERIR CÓDIGO!!!!!
    return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    //Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
    letrasChutadas.forEach(letra => {
      if (!palavra.includes(letra)) {
        vidas --;
      }

      // Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua 
      //respectiva posição. Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b",
      // então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "", "", "_" ].
      palavraAlvo = palavra.split("");
      palavra.forEach(() => palavraAlvo.push('_'));
      
      //Duplicar array: Original será o visualizado com "_", enquanto a cópia será o descartado para conferencia.
      
      palavraAlvo.forEach((letraDaPalavraAlvo)=> {
        if (letra === letraDaPalavraAlvo) {
          //?????
        }
      })

    })
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;