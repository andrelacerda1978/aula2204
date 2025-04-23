function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';

    if (isNaN(idade) || idade < 0) {
        resultado = 'Por favor, informe uma idade válida.';
    } else if (idade <= 11) {
        resultado = 'Você é uma criança 👶';
    } else if (idade <= 17) {
        resultado = 'Você é um adolescente 🧒';
    } else if (idade <= 59) {
        resultado = 'Você é um adulto 🧑';
    } else {
        resultado = 'Você é um idoso 👴';
    }

    document.getElementById('resultado').innerText = resultado;
}
