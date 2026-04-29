function abrirPartida() {
  document.body.innerHTML = `
    <canvas id="gameCanvas"></canvas>
    <div id="hud">
      <div>CASA 0 x 0 VISITANTE</div>
      <div id="tempo">02:00</div>
    </div>
  `;

  iniciarJogo();
}

function iniciarJogo() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const campo = {
    tipo: "capim"
  };

  const bola = {
    x: canvas.width/2,
    y: canvas.height/2,
    r: 10
  };

  const jogadores = [
    {x:120,y:canvas.height/2,cor:"#00aa44",tipo:"goleiro"},
    {x:250,y:220,cor:"#00aa44",tipo:"defensor"},
    {x:320,y:420,cor:"#00aa44",tipo:"meio"},
    {x:430,y:320,cor:"#00aa44",tipo:"atacante"},

    {x:canvas.width-120,y:canvas.height/2,cor:"#e0b100",tipo:"goleiro"},
    {x:canvas.width-250,y:220,cor:"#e0b100",tipo:"defensor"},
    {x:canvas.width-320,y:420,cor:"#e0b100",tipo:"meio"},
    {x:canvas.width-430,y:320,cor:"#e0b100",tipo:"atacante"}
  ];

  function desenharCampo() {
    ctx.fillStyle = campo.tipo === "capim" ? "#2f8f2f" : "#7a4a22";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;

    ctx.strokeRect(30,30,canvas.width-60,canvas.height-60);

    ctx.beginPath();
    ctx.moveTo(canvas.width/2,30);
    ctx.lineTo(canvas.width/2,canvas.height-30);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(canvas.width/2,canvas.height/2,80,0,Math.PI*2);
    ctx.stroke();

    // gols
    ctx.strokeRect(20,canvas.height/2-80,20,160);
    ctx.strokeRect(canvas.width-40,canvas.height/2-80,20,160);
  }

  function desenharJogadores() {
    jogadores.forEach(j=>{
      ctx.beginPath();
      ctx.fillStyle = j.cor;
      ctx.arc(j.x,j.y,22,0,Math.PI*2);
      ctx.fill();

      if(j.tipo==="goleiro"){
        ctx.fillStyle="#ffffff";
        ctx.fillRect(j.x-8,j.y-8,16,16);
      }
    });
  }

  function desenharBola() {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(bola.x,bola.y,bola.r,0,Math.PI*2);
    ctx.fill();
  }

  function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    desenharCampo();
    desenharJogadores();
    desenharBola();

    requestAnimationFrame(loop);
  }

  loop();
              }
