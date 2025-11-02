let canvas = document.getElementById('formas');
let ctx = canvas.getContext('2d');
//quadradoazul
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,80,80);
ctx.closePath();
//quadradovermelhocanto
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(420,0,80,80);
ctx.closePath();
//quadrovermelhocentro
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(190,250,60,60);
ctx.closePath();
//retangulo1
ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(0,200,50,100);
ctx.closePath();
//retangulo2
ctx.beginPath();
ctx.fillStyle = 'cyan';
ctx.fillRect(450,225,50,50);
ctx.closePath();
//linhaverdecentral
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.strokeRect(0,250,500,0);
ctx.closePath();
//linhapreta
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeRect(250,250,0,250);
ctx.closePath();
//circuferenciadividida
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(250,250,120,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();
//tampando
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';
ctx.arc(250,250,120,1.25*Math.PI,1.75*Math.PI);
ctx.stroke();
ctx.closePath();
//linhaazul
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;
ctx.moveTo(80,80);
ctx.lineTo(250,250);
ctx.stroke();
ctx.closePath();
//linhavermelha
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.moveTo(420,80);
ctx.lineTo(250,250);
ctx.stroke();
ctx.closePath();
//circulocyan
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.arc(250,200,20,0*Math.PI,2*Math.PI);
ctx.fillStyle = 'cyan';
ctx.arc(250,200,20,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
//circunferenciacentral
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(250,250,100,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();
//circuloembaixo
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.arc(250,500,60,0*Math.PI,2*Math.PI);
ctx.fillStyle = 'cyan';
ctx.arc(250,500,60,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
//circunferenciaembaixoesquerda
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(250,500,120,0.5*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();
//circunferenciaembaixodireita
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(250,500,90,1.5*Math.PI,2.5*Math.PI);
ctx.stroke();
ctx.closePath();
//circuloamarelodireita
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.arc(110,380,20,0*Math.PI,2*Math.PI);
ctx.fillStyle = 'yellow';
ctx.arc(110,380,20,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
//circuloamareloesquerda
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.arc(410,380,20,0*Math.PI,2*Math.PI);
ctx.fillStyle = 'yellow';
ctx.arc(410,380,20,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();
//retanguloamarelo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,400,50,100);
ctx.closePath();
//quadradoamarelo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(50,450,50,50);
ctx.closePath();
//retangulopreto
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(450,400,50,100);
ctx.closePath();
//quadradopreto
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(400,450,50,50);
ctx.closePath();
//texto
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",250,100);
ctx.closePath();