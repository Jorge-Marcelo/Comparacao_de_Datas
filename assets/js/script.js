/*
Autor: Jorge Marcelo
Data de Criação: 12/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Manipulando elemntos pelo DOM*/ 
let data1Input = document.getElementById("data1");
let data2Input = document.getElementById("data2");
let buttonComparar = document.getElementById("buttonComparar");
let resultado = document.getElementById("resultado");

/*Adicionando variaveis aos inputs*/
let data1 = data1Input.value;
let data2 = data2Input.value;

/*Função que verifica se a data é um number*/
function verificacaoDatas(evento){
evento.preventDefault();
if(isNaN(data1) || isNaN(data2)){
resultado.textContent = `Entre com datas validas`
}
}

/**Função de comparação de datas*/
function compararDatas(evento){
evento.preventDefault();

/*Usando o objeto date*/ 
let data1 = new Date(data1Input.value);
let data2 = new Date(data2Input.value);

/*Convertendo o valor das datas para milessimos de segundos*/
let miliessegundos = Math.abs(data1 - data2);
let calcularDias = Math.floor(miliessegundos
/ (1000 * 60 * 60 * 24))

/*Exibindo resultado no HTML*/
resultado.textContent = `A diferença entre ${data1.toLocaleDateString()} e 
${data2.toLocaleDateString()} é de ${calcularDias} dia(s)`;
}

/*Escutador de eventos do botão de comparação*/
buttonComparar.addEventListener("click", compararDatas);


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})