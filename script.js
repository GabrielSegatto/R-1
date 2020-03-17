var inicio = document.querySelector('#p1');
var teste = document.querySelector('#p2');
var fim = document.querySelector('#p3');
var nivelEstudo;
function iniciar(){
    nivelEstudo = document.querySelector('input[name="estudo"]:checked').value;
    inicio.style.display = 'none';
    teste.style.display = 'block';
}

var questao = 1;
var respostas = [];
var respostaAtual;
var imagemDaQuestao = document.querySelector("#imagem");
var imagemA = document.querySelector("#A");
var imagemB = document.querySelector("#B");
var imagemC = document.querySelector("#C");
var imagemD = document.querySelector("#D");
var imagemE = document.querySelector("#E");
var imagemF = document.querySelector("#F");
function attImg(n){
    document.querySelector('#numDaQuestao').innerText = n;
    respostaAtual.checked = false;
    imagemDaQuestao.src = "/img/questoes/q" + n + ".jpg";
    imagemA.src = "/img/respostas/" + n + "/A.jpg";
    imagemB.src = "/img/respostas/" + n + "/B.jpg";
    imagemC.src = "/img/respostas/" + n + "/C.jpg";
    imagemD.src = "/img/respostas/" + n + "/D.jpg";
    imagemE.src = "/img/respostas/" + n + "/E.jpg";
    imagemF.src = "/img/respostas/" + n + "/F.jpg";
}

function prox(){
    respostaAtual = document.querySelector('input[name="resposta"]:checked');
    respostas[questao-1] = respostaAtual.value;
    questao += 1;
    if(questao == 6){
        teste.style.display = 'none';
        fim.style.display = 'block';
        resultado(respostas);
        return;
    }
    attImg(questao);
} 
function voltar(){
    questao -= 1;
    attImg(questao);
}

var gabarito = ['A', 'B', 'C', 'D', 'E'];
var acertos = 0;
function resultado(array){
    for(var i = 0;i < array.length ; i++){
        if(respostas[i] == gabarito[i])acertos +=1;
    }
    if(nivelEstudo == 0 && acertos >= 1) aprovado = true;
    else if(nivelEstudo == 1 && acertos >= 2) aprovado = true;
    else if(nivelEstudo == 2 && acertos >= 3) aprovado = true;
    else if(nivelEstudo == 3 && acertos >= 4) aprovado = true;
    if(aprovado)document.querySelector('#aprovado').innerText = "Você foi aprovado";
    else document.querySelector('#aprovado').innerText = "Você foi reprovado";
    document.querySelector('#textAcertos').innerText = acertos;
}