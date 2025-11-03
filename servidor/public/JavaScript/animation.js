//criando o canvas
let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');
// classe Retangulo definida como imagem
class Retangulo {
  constructor(srcImagem, x, y, largura, altura) {
    //cria um objeto de imagem em branco
    this.img = new Image();
    this.carregada = false;
    //quando imagem carregar fica true
    this.img.onload = () => {
      this.carregada = true;
    };
    // carrega a imagem
    this.img.src = srcImagem;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }
  //desenha a imagem no canvas se ela estiver carregada
  desenhe(contexto) {
    if (this.carregada) {
      contexto.drawImage(this.img, this.x, this.y, this.largura, this.altura);
    }
  }
}
//cria carta para seguir o retangulo
let Mtg = new Retangulo('./Imagens/mtg-back.webp', 150, 150, 50, 60);

//const bg cria uma nova imagem
const bg = new Image();
//procura e carrega a imagem de fundo
bg.src = './Imagens/PlaymatYuriko.jpg';
//espera carregar 
let bgCarregada = false;
//quando carregar fica true
bg.onload = () => { bgCarregada = true; };
// funcao para desenha o fundo com cover
function desenharBackgroundCover(contexto) {
  if (!bgCarregada) return;
  //calcula o tamnho do canvas
  const cw = canvas1.width / (window.devicePixelRatio || 1); 
  const ch = canvas1.height / (window.devicePixelRatio || 1);
  const iw = bg.width;
  const ih = bg.height;

  //calcula a escala proporcional(usei o Math.max pois quero preencher o canvas inteiro)
  //canvas 800x600 (imagem 1000x500)
  const scale = Math.max(cw / iw, ch / ih); //800/1000 e 600/500
  // calcula a area da imagem para recortar 
  const sw = cw / scale; 
  const sh = ch / scale;

  const sx = (iw - sw) / 2;
  const sy = (ih - sh) / 2;

  // desenha a imagem
  contexto.drawImage(bg, sx, sy, sw, sh, 0, 0, cw, ch);
}

//funcao de animao que limpa o canvas, desenha o fundo e a carta
function animacao() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  desenharBackgroundCover(ctx1);

  Mtg.desenhe(ctx1);

  requestAnimationFrame(animacao);
}
animacao();
//detecta a possicao do mouse e move o retangulo(carta) junto
//ja está centralizado com o ponteiro do mouse
//nao permite que saia do canvas
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