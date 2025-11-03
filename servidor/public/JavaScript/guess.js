// Gera um número r em [0, 1)
const r = Math.random();
console.log("r gerado (0 ≤ r < 1):", r);

// Converte a parte decimal em inteiro de 0 a 99 (ex: r = 0.25 -> x = 25)
const x = Math.floor(r * 100);
console.log("Valor x (parte decimal * 100):", x);

// Busca elementos da página usando as classes que você renomeou
const estrutura = document.querySelector(".estrutura");
const inputEl = document.querySelector(".input");
const botao = document.querySelector(".enviar");

// Garante que exista um elemento para mostrar a mensagem; cria se não existir
let mensagemEl = document.querySelector(".mensagem");
if (!mensagemEl) {
  mensagemEl = document.createElement("p");
  mensagemEl.className = "mensagem";
  // Coloca a mensagem logo abaixo do input
  if (inputEl && inputEl.parentNode) {
    inputEl.parentNode.insertBefore(mensagemEl, inputEl.nextSibling);
  } else if (estrutura) {
    estrutura.appendChild(mensagemEl);
  } else {
    // fallback: adiciona ao body
    document.body.appendChild(mensagemEl);
  }
}

// Função que verifica o palpite e atualiza a interface
function verificarPalpite() {
  const valor = inputEl ? inputEl.value : "";
  const palpite = parseInt(valor, 10);

  // Validação do input
  if (Number.isNaN(palpite) || palpite < 0 || palpite > 99) {
    mensagemEl.textContent = "Entrada inválida. Insira um número entre 0 e 99.";
    mensagemEl.style.color = "#000";
    if (estrutura) estrutura.style.setProperty("background-color", "orange");
    console.log("Entrada inválida");
    return;
  }

  // Comparação e resposta
  if (palpite === x) {
    mensagemEl.textContent = `Acertou! O número era ${x}.`;
    mensagemEl.style.color = "#fff";
    if (estrutura) estrutura.style.setProperty("background-color", "green");
    console.log("Acertou!");
  } else if (palpite < x) {
    mensagemEl.textContent = `Errou: seu palpite é menor que o valor gerado.`;
    mensagemEl.style.color = "#fff";
    if (estrutura) estrutura.style.setProperty("background-color", "red");
    console.log("Palpite menor");
  } else {
    mensagemEl.textContent = `Errou: seu palpite é maior que o valor gerado.`;
    mensagemEl.style.color = "#fff";
    if (estrutura) estrutura.style.setProperty("background-color", "red");
    console.log("Palpite maior");
  }
}

// Associa o clique do botão (se existir)
if (botao) {
  botao.addEventListener("click", verificarPalpite);
} else {
  console.warn("Botão com a classe .enviar não encontrado.");
}
