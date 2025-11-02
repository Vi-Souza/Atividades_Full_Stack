let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

class Retangulo {
  constructor(srcImagem, x, y, largura, altura) {
    this.img = new Image();
    this.carregada = false;

    this.img.onload = () => {
      this.carregada = true;
    };

    this.img.src = srcImagem;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }

  desenhe(contexto) {
    if (this.carregada) {
      contexto.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
  }
}

let Mtg = new Retangulo('./Imagens/mtg-back.webp', 150, 150, 50, 60);


const bg = new Image();
bg.src = './Imagens/PlaymatYuriko.jpg'; 
let bgCarregada = false;
bg.onload = () => { bgCarregada = true; };

function desenharBackgroundCover(contexto) {
  if (!bgCarregada) return;

  const cw = canvas1.width / (window.devicePixelRatio || 1); 
  const ch = canvas1.height / (window.devicePixelRatio || 1);
  const iw = bg.width;
  const ih = bg.height;


  const scale = Math.max(cw / iw, ch / ih);
  const sw = cw / scale; 
  const sh = ch / scale;

  const sx = (iw - sw) / 2;
  const sy = (ih - sh) / 2;


  contexto.drawImage(bg, sx, sy, sw, sh, 0, 0, cw, ch);
}


function animacao() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  desenharBackgroundCover(ctx1);

  Mtg.desenhe(ctx1);

  requestAnimationFrame(animacao);
}
animacao();

canvas1.addEventListener('mousemove', function(evento) {
  let rect = canvas1.getBoundingClientRect();
  let x_mouse = evento.clientX - rect.left;
  let y_mouse = evento.clientY - rect.top;

  let desiredX = x_mouse - Mtg.largura / 2;
  let desiredY = y_mouse - Mtg.altura / 2;

  let minX = 0;
  let minY = 0;
  let maxX = rect.width - Mtg.largura;
  let maxY = rect.height - Mtg.altura;

  Mtg.x = Math.max(minX, Math.min(desiredX, maxX));
  Mtg.y = Math.max(minY, Math.min(desiredY, maxY));
});