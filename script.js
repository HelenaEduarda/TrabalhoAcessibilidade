
let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte = tamanhoFonte + 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    tamanhoFonte = tamanhoFonte - 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function alternarContraste() {
    document.getElementById("pagina").classList.toggle("alto-contraste");
}
