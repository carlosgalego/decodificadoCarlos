var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");
var outputText = document.getElementById('output-text');

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");

    var cardContent = `
        <div class="card" style="padding: 10px;">
            <div class="bg"></div>
            <div class="blob">Mensagens Codificadas:</div>
            <div class="text" style="color: var(--corprimaria);">${resultCripto}</div>
        </div>
    `;

    outInput.innerHTML = cardContent;
    outputText.textContent = "Sua mensagem criptografada:";
    document.getElementById('output-img').style.display = 'none';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
        .replace(/ober/g, "o").replace(/ufat/g, "u");

    var cardContent = `
        <div class="card">
            <div class="bg"></div>
            <div class="blob"></div>
            <div class="text">${resultDescripto}</div>
        </div>
    `;

    outInput.innerHTML = cardContent;
    outputText.textContent = "Sua mensagem descriptografada:";
    document.getElementById('output-img').style.display = 'none';
}

function changeColor(color) {
    document.documentElement.style.setProperty('--corprimaria', color);
    document.documentElement.style.setProperty('--cor-placeholder', color);
    document.documentElement.style.setProperty('--cor-texto', color);
}

document.getElementById('color-selector').addEventListener('input', function() {
    changeColor(this.value);
});
