// Gera um número aleatório entre 0 e 99
const numeroSecreto = Math.floor(Math.random() * 100);
console.log("Número secreto:", numeroSecreto); // Para ver no console

// Espera o botao
document.querySelector(".enviar").addEventListener("click", function () {
    const sorteio = Math.floor(Math.random() * 2); // Gera 0 ou 1
    console.log("Sorteio:", sorteio);

    if (sorteio === 1) {
        const palpite = parseInt(document.querySelector(".input").value);

        if (palpite === numeroSecreto) {
            document.querySelector(".estrutura").style.setProperty("background-color", "green");
            console.log("Acertou!");
        } else {
            document.querySelector(".estrutura").style.setProperty("background-color", "red");
            console.log("Errou! Tente novamente.");
        }
    } else {
        console.log("Não foi sorteado para verificar o número.");
    }
});