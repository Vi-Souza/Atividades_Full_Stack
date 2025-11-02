/* canvas.js - contém ambos os scripts encapsulados */

/* === script do projeto 1 (casinha) === */
(function CanvasCasinhaModule(){
  const canvas = document.getElementById('casinha');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.fillRect(210,250,90,100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(0,350,500,200);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(375,100,50,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'saddlebrown';
    ctx.moveTo(210,250);
    ctx.lineTo(255,200);
    ctx.lineTo(300,250);
    ctx.lineTo(210,250);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(245,310,20,40);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(220,270,20,20);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'gray';
    ctx.fillRect(270,270,20,20);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.fillRect(440,340,20,60);
    ctx.fillStyle = 'green';
    ctx.arc(450,330,25,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.fillRect(60,290,20,60);
    ctx.fillStyle = 'green';
    ctx.arc(70,280,25,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(0,350,60,Math.PI,2*Math.PI);
    ctx.fill();
    ctx.closePath();

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

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(210,500,60,Math.PI,2*Math.PI);
    ctx.fill();
    ctx.closePath();
  }

  // desenha ao carregar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', draw);
  } else {
    draw();
  }

  window.__CanvasCasinha = { draw };
})();

/* === script do projeto 2 (formas) === */
(function CanvasFormasModule(){
  const canvas = document.getElementById('formas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,80,80);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(420,0,80,80);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(190,250,60,60);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'cyan';
    ctx.fillRect(0,200,50,100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'cyan';
    ctx.fillRect(450,225,50,50);
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.moveTo(0,250);
    ctx.lineTo(500,250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.moveTo(250,250);
    ctx.lineTo(250,500);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(250,250,120,Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'white';
    ctx.arc(250,250,120,1.25*Math.PI,1.75*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.moveTo(80,80);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(420,80);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'cyan';
    ctx.arc(250,200,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(250,250,100,Math.PI,2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.arc(250,500,60,0,2*Math.PI);
    ctx.fillStyle = 'cyan';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(250,500,120,0.5*Math.PI,1.5*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.arc(250,500,90,1.5*Math.PI,2.5*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.arc(110,380,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.arc(410,380,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,400,50,100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(50,450,50,50);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(450,400,50,100);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(400,450,50,50);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Canvas",250,100);
    ctx.closePath();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', draw);
  } else {
    draw();
  }

  window.__CanvasFormas = { draw };
})();
