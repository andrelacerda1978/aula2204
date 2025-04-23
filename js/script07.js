function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function mostrarPrimos() {
    var  inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        resultado.innerText = "Digite valores válidos (início menor que o fim).";
        return;
    }

    let primos = [];
    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length === 0) {
        resultado.innerText = "Nenhum número primo encontrado no intervalo.";
    } else {
        resultado.innerText = `Números primos entre ${inicio} e ${fim}: ${primos.join(", ")}`;
    }
}
