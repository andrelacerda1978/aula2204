function converterTempo() {
    const horas = parseFloat(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas < 0) {
        resultado.innerText = "Digite um número válido de horas.";
        return;
    }

    var minutos = horas * 60;
    var segundos = horas * 3600;

    resultado.innerText = `${horas} hora(s) equivalem a ${minutos} minutos ou ${segundos} segundos.`;
}
