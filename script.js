//   Exercício 1

let menu = document.getElementById("menu");
menu.style.background = "red";

// Exercício 2

let nomeCompleto = document.getElementsByClassName('nome');
nomeCompleto[0].innerText = 'Deyse Aiala Rosa Vieira';



// Exercício 3

let paragrafoSobre = document.createElement('p');
let textoSobre = document.createTextNode('Tenho 33 anos. Sou casada e tenho dois filhos lindos. Trabalho na área comercial desde os 16 anos, iniciei minha carreira como vendedora, onde aprendi todos os processos de uma loja. Fiz vários cursos de especialização dentro da área de vendas e iniciei a Faculdade de Gestão Comercial. Com empenho fui promovida a gerente de loja e me mantive assim ao longo desses anos. E mesmo sendo feliz onde trabalhei, depois de tantos anos na mesma área, sentia vontade de buscar uma nova carreira e encontrei na programação essa oportunidade. Iniciei os estudos com o Floripa Mais Tec totalmente do zero, estudei bastante e consegui uma vaga no Futuro DEV. Estou aprendendo muito, mesmo com as dificuldades de uma coisa tão nova, sigo confiante e me dedicando.');
paragrafoSobre.appendChild(textoSobre);
let section = document.querySelector('section');
section.appendChild(paragrafoSobre);

// Exercício 4

let itemRemovido = document.getElementById('itemMenu');
let elementoPai = document.querySelector('header');
elementoPai.removeChild(itemRemovido);

// Exercício 5

let subtitulo = document.getElementsByClassName('subtitulo');

for(i=0; i<subtitulo.length; i++){
subtitulo[i].style.color = "red";
}

//Exercício 6

let artigoFormacao = document.querySelector("article");
artigoFormacao.setAttribute('class', 'formacoes');

//Exercício 7

let rodape = document.querySelector("footer");
rodape.removeAttribute('class'); 

//Exercício 8

let opcaoMenu = document.querySelectorAll("a");
opcaoMenu[1].setAttribute('href', '#contatos')

//Exercício 9
let experiencias = document.querySelectorAll('div');
experiencias[2].removeAttribute('style');

//Exercício 10 coloquei em um arquivo separado







