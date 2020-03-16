function iniciar(){
    var nivelEstudo = document.querySelector('input[name="estudo"]:checked').value;
    window.location.href = '/teste.html';
}

var questao = 1;
var respostas = [];
var respostaAtual;
var imagem = document.querySelector("#imagem")

function prox(){
    respostaAtual = document.querySelector('input[name="resposta"]:checked');
    respostas.push(respostaAtual.value)
    questao += 1;
    respostaAtual.checked = false;
    imagem.src = "/img/q" + questao + ".jpg";
}