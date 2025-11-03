// Importa módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Inicializa o app Express
const app = express();

// Configura EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para ler dados de formulários
app.use(bodyParser.urlencoded({ extended: false }));

// Servir arquivos estáticos da pasta public (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// "Banco de dados" em memória (apenas para testes)
const usuarios = []; // cada usuário: { username, password, nome }

// Rota principal redireciona para a página de projetos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Rota para acessar a página de cadastro
app.get('/cadastra', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

// Rota para acessar a página de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Rota para processar o formulário de cadastro
app.post('/cadastra', (req, res) => {
  const { username, password, nome } = req.body;

  // Verifica se o usuário já existe
  const existe = usuarios.find(u => u.username === username);
  if (existe) {
    return res.render('resposta', {
      sucesso: false,
      acao: 'cadastro',
      mensagem: 'Usuário já existe. Tente outro nome de usuário.'
    });
  }

  // Adiciona novo usuário
  usuarios.push({ username, password, nome });

  // Renderiza resposta de sucesso
  res.render('resposta', {
    sucesso: true,
    acao: 'cadastro',
    mensagem: `Cadastro realizado com sucesso para ${nome}.`
  });
});

// Rota para processar o formulário de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica se usuário existe e senha está correta
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  if (usuario) {
    res.render('resposta', {
      sucesso: true,
      acao: 'login',
      mensagem: `Login bem-sucedido. Bem-vindo, ${usuario.nome}!`
    });
  } else {
    res.render('resposta', {
      sucesso: false,
      acao: 'login',
      mensagem: 'Usuário ou senha inválidos.'
    });
  }
});

// Inicia o servidor na porta 80
app.listen(80, () => {
  console.log('Servidor rodando na porta 80...');
});
