function calcularFatorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var  resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 0) {
        resultado.innerText = "Digite um número válido (maior ou igual a 0).";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.innerText = `O fatorial de ${numero} é ${fatorial}`;
}
