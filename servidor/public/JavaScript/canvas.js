let canvas = document.getElementById('casinha');
let ctx = canvas.getContext('2d');
//casa
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(210,250,90,100);
ctx.closePath();
//chao
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,350,500,200);
ctx.closePath;
//sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(375,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();
//telhado
ctx.beginPath();
ctx.fillStyle = 'saddlebrown';
ctx.moveTo(210,250);
ctx.lineTo(255,200);
ctx.lineTo(300,250);
ctx.lineTo(210,250);
ctx.fill();
ctx.closePath();
//porta
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(245,310,20,40);
ctx.closePath();
//janela1
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(220,270,20,20);
ctx.closePath();
//janela2
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(270,270,20,20);
ctx.closePath();
//arvore1
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(440,340,20,60);
ctx.fillStyle = 'green';
ctx.arc(450,330,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();
//arvore2
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(60,290,20,60);
ctx.fillStyle = 'green';
ctx.arc(70,280,25,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();
//circulo1
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(0,350,60,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();
//fill azul
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(0,350);
ctx.lineTo(60,350);
ctx.lineTo(60,440);
ctx.lineTo(210,440);
ctx.lineTo(210,500);
ctx.lineTo(0,500);
ctx.fill();
ctx.closePath();
//circulo2
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.arc(210,500,60,1*Math.PI,2*Math.PI);
ctx.fill();