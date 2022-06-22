let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    const playerOne = jogador1.toUpperCase();
    const playerTwo = jogador2.toUpperCase();
  
    const comparePlayers = (attackOne, attackTwo) =>  playerOne === attackOne && playerTwo === attackTwo;
    
      if(comparePlayers("ATAQUE", "ATAQUE")) print("Aniquilacao mutua");
      else if (comparePlayers("ATAQUE", "PEDRA")) print("Jogador 1 venceu");
      else if (comparePlayers("ATAQUE", "PAPEL")) print("Jogador 1 venceu");
      else if (comparePlayers("PEDRA", "ATAQUE")) print("Jogador 2 venceu");
      else if (comparePlayers("PEDRA ", "ATAQUE")) print("Jogador 2 venceu");
      else if (comparePlayers("PEDRA", "PEDRA")) print("Sem ganhador");
      else if (comparePlayers("PEDRA", "PAPEL")) print("Jogador 1 venceu");
      else if (comparePlayers("PAPEL", "ATAQUE")) print("Jogador 2 venceu");
      else if (comparePlayers("PAPEL", "PAPEL")) print("Ambos venceram");
      else if (comparePlayers("PAPEL", "PEDRA")) print("Jogador 2 venceu");
      else print("Sem ganhador");
}
