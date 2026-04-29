let control = {
  up:false,
  down:false,
  left:false,
  right:false,
  speed:4
};

function criarControles(){
  const ui = document.createElement("div");
  ui.innerHTML = `
    <div id="joy">🕹️</div>

    <button class="ctrl pass">PASSAR</button>
    <button class="ctrl shoot">CHUTAR</button>
    <button class="ctrl run">CORRER</button>
    <button class="ctrl tackle">POSSE</button>
    <button class="ctrl swap">TROCAR</button>
  `;

  document.body.appendChild(ui);

  const joy = document.getElementById("joy");

  joy.addEventListener("touchmove", e=>{
    const t = e.touches[0];
    const x = t.clientX;
    const y = t.clientY;

    control.left = x < 110;
    control.right = x > 170;
    control.up = y < window.innerHeight-170;
    control.down = y > window.innerHeight-110;
  });

  joy.addEventListener("touchend", ()=>{
    control.up=false;
    control.down=false;
    control.left=false;
    control.right=false;
  });

  document.querySelector(".run").onclick = ()=>{
    control.speed = 7;
    setTimeout(()=>control.speed=4,500);
  };

  document.querySelector(".pass").onclick = ()=>{
    alert("Passe!");
  };

  document.querySelector(".shoot").onclick = ()=>{
    alert("Chute!");
  };

  document.querySelector(".tackle").onclick = ()=>{
    alert("Disputando posse!");
  };

  document.querySelector(".swap").onclick = ()=>{
    alert("Trocando jogador!");
  };
}
