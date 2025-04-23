const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    var palpite = parseInt(document.getElementById("palpite").value);
    var mensagem = document.getElementById("mensagem");

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.innerText = "Digite um número válido entre 1 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        mensagem.innerText = "Parabéns! Você acertou!";
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = "Tente um número maior.";
    } else {
        mensagem.innerText = "Tente um número menor.";
    }
}
