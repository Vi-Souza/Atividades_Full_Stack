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

let Mtg = new Retangulo('mtg-back.webp', 150, 150, 50, 60); // Caminho corrigido

function animacao() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    Mtg.desenhe(ctx1);
    requestAnimationFrame(animacao);
}

animacao();

canvas1.addEventListener('mousemove', function(evento) {
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    Mtg.x = x_mouse - Mtg.largura / 2;
    Mtg.y = y_mouse - Mtg.altura / 2;
});