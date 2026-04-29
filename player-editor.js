function criarJogadorCompleto(){
  const nome = prompt("Nome do jogador:");
  if(!nome) return;

  const sexo = prompt("Sexo: Masculino ou Feminino");
  const altura = prompt("Altura (1.40 até 2.20)");
  const peso = prompt("Peso (78 até 120)");
  const posicao = prompt("Posição: Goleiro / Zagueiro / Meio / Atacante");
  const uniforme = prompt("Cor do uniforme");

  const jogador = {
    nome,
    sexo,
    altura,
    peso,
    posicao,
    uniforme
  };

  localStorage.setItem("jogadorCompleto", JSON.stringify(jogador));

  atualizarPainelJogador();

  alert("✅ Jogador salvo!");
}

function atualizarPainelJogador(){
  const data = localStorage.getItem("jogadorCompleto");
  if(!data) return;

  const jogador = JSON.parse(data);

  const title = document.querySelector(".player-box h3");
  const subtitle = document.querySelector(".player-box p");

  if(title){
    title.innerText = jogador.nome.toUpperCase();
  }

  if(subtitle){
    subtitle.innerText =
      jogador.posicao + " • " +
      jogador.sexo + " • " +
      jogador.uniforme;
  }
}

window.addEventListener("load", atualizarPainelJogador);
