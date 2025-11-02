// inclui o módulo http
var http = require('http');
// inclui o módulo express
var express = require('express');

// cria o express, pela qual acessaremos
// métodos / funções existentes no framework
var app = express();

// método use() utilizado para definir em qual
// pasta estará o conteúdo estático
app.use(express.static('./public'));

// cria o servidor
var server = http.createServer(app);

// define o número da porta que o servidor ouvirá
server.listen(3000);

// mensagem exibida no console para debug
console.log("servidor rodando...");
