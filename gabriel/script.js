console.log('teste');

const nome = document.getElementById("nome");
nome.addEventListener("input", function () {
    console.log("Nome digitado: " + nome.value);
});


const destaque = document.getElementsByClassName("destaque");
destaque[0].style.color = "blue";

const paragrafos = document.getElementsByTagName("p");
console.log("Quantidade de parágrafos: " + paragrafos.length);


const primeiroH2 = document.querySelector("h2");
primeiroH2.style.color = "green";

const botoes = document.querySelectorAll("button");
botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        console.log("Um botão foi clicado!");
    });
});

const titulo = document.querySelector("h1");
titulo.innerHTML = "Fundação de Ensino de Contagem - DOM";


const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Formulário enviado com sucesso!");
});


const segundoH2 = document.querySelectorAll("h2")[1];
segundoH2.addEventListener("click", function () {
    segundoH2.classList.toggle("destaque");
});

const novoParagrafo = document.createElement("p");
novoParagrafo.innerHTML = "Este parágrafo foi criado com JavaScript!";

document.body.appendChild(novoParagrafo);