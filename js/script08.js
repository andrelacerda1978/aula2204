function validarCPF() {
    const cpf = document.getElementById("cpf").value.trim();
    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        resultado.innerText = "CPF inválido: deve conter 11 dígitos numéricos.";
        return;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        resultado.innerText = "CPF inválido: todos os dígitos são iguais.";
        return;
    }

    var  cpfArray = cpf.split("").map(Number);
    
    var soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += cpfArray[i] * (10 - i);
    }
    var dig1 = 11 - (soma % 11);
    dig1 = dig1 > 9 ? 0 : dig1;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpfArray[i] * (11 - i);
    }
    var dig2 = 11 - (soma % 11);
    dig2 = dig2 > 9 ? 0 : dig2;

    if (dig1 === cpfArray[9] && dig2 === cpfArray[10]) {
        resultado.innerText = "CPF válido!";
    } else {
        resultado.innerText = "CPF inválido.";
    }
}
