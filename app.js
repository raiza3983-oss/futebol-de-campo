const buttons = document.querySelectorAll(".menu-grid button");

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const text = btn.innerText;

    if(text.includes("JOGAR")){
      alert("⚽ Iniciando partida 4x4...");
    }

    if(text.includes("TORNEIOS")){
      alert("🏆 Abrindo torneios...");
    }

    if(text.includes("SELEÇÃO")){
      alert("🛡 Seleção de times...");
    }

    if(text.includes("CRIAR JOGADOR")){
      const nome = prompt("Nome do jogador:");
      if(nome){
        localStorage.setItem("ultimoJogador", nome);
        alert("Jogador criado: " + nome);
      }
    }

    if(text.includes("ADMINISTRAR")){
      alert("👥 Painel de times...");
    }

    if(text.includes("CONFIGURAÇÕES")){
      alert("⚙ Abrindo configurações...");
    }
  });
});

const saved = localStorage.getItem("ultimoJogador");

if(saved){
  const title = document.querySelector(".player-box h3");
  if(title){
    title.innerText = saved.toUpperCase();
  }
}
