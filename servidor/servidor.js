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

app.use(express.static('./public'));

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
