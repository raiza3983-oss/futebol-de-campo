function criarTime(){
  const nomeTime = prompt("Nome do time:");
  if(!nomeTime) return;

  let jogadores = [];

  const data = localStorage.getItem("jogadorCompleto");
  if(data){
    jogadores.push(JSON.parse(data));
  }

  const time = {
    nome: nomeTime,
    titulares: jogadores.slice(0,4),
    reservas: jogadores.slice(4,8)
  };

  localStorage.setItem("timeCriado", JSON.stringify(time));

  alert("✅ Time criado: " + nomeTime);

  mostrarTime();
}

function mostrarTime(){
  const data = localStorage.getItem("timeCriado");
  if(!data) return;

  const time = JSON.parse(data);

  alert(
    "TIME: " + time.nome +
    "\nTitulares: " + time.titulares.length +
    "\nReservas: " + time.reservas.length
  );
}
