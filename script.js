// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% do topo
        left: '0',
    },
'orange'
); //Nomeando este trecho de anima.ção como 'orange' para sincronização

tl.to(
'#laranja-cortada',
{
    top: '160%', // Move o elemento com id 'orange-cut' para 160% do topo
    left: '23%', //Move o elemento para 23% da esquerda
},
'orange'
); // Sincronizado com a animação nomeada 'orange'

tl.to(
 '#laranja',
 {
    width: '15%', // Reduz a largura do elemento com id 'orange' para 15%
    top: '160%',  // Move o elemento para 160% do topo
    right: '10%', // Move o elemento para 10% da direita
 },
 'orange'
); // Sincronizado com a animação nomeada 'orange'

tl.to(
 '#folha',
 {
     top: '110%',  // Move o elemento com id 'leaf' para 110% do topo
    rotate: '530deg', //  Rotaciona o elemento em 130 graus
    left: '70%', // Move o elemento para 70% da esquerda
 },
 'orange'
); // Sincronizado com a animação nomeada 'orange'

tl.to(
 '#folha2',
 {
     top: '110%',  // Move o elemento com id 'leaf2' para 110% do topo
    rotate: '530deg', //  Rotaciona o elemento em 130 graus
    left: '0%', // Move o elemento para 0% da esquerda
 },
 'orange'
); // Sincronizado com a animação nomeada 'orange'



// CRIANDO OUTRA TIMELINE


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

//  Definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
'.lemon1',
{
    rotate: '-90deg', // Inicia o elemento com classe 'lemon1 rotacionado em -90 graus
    left: '-100%', // Inicia o elemento fora da tela, à esquerda (-100)
    top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
},
'ca'
); // Nomeando este trecho de animação como 'ca' para sincronização


tl2.from(
'#cocacola',
{
    rotate: '-90deg', // Inicia o elemento com id 'cocacola' rotacionado em -90 graus
    top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    left: '-100%', // Inicia o elemento fora da tela, à esquerda (-100)
},
'ca'
); // Sincronizado com a animação nomeada 'ca'

tl2.from(
'.lemon2',
{
    rotate: '-90deg', // Inicia o elemento com classe 'cocacola' rotacionado em -90 graus
    left: '100%', // Inicia o elemento fora da tela, à direita (100%)
    top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
},
'ca'
); // Sincronizado com a animação nomeada 'ca'

tl2.from(
'#pepsi',
{
    rotate: '90deg', // Inicia o elemento com id 'pepsi' rotacionado em -90 graus
    left: '100%', // Inicia o elemento fora da tela, à direita (100%)
    top: '110%', // Inicia o elemento ligeiramente abaixo da tela (110% do topo)
},
'ca'
); // Sincronizado com a animação nomeada 'ca'

tl2.to(
'#laranja-cortada',
{
    width: '18%', // Aumenta a largura do elemento com id 'laranja-cortada' para 18%
    left: '42%', // Move o elemento para 42% da esquerda
    top: '204%', // Move o elemento para 204% do topo
},
'ca'
); // Sincronizado com a animação nomeada 'ca'

tl2.to(
'#fanta',
{
    width: '35%', // Aumenta a largura do elemento com id 'laranja-cortada' para 18%
    left: '33%', // Move o elemento para 42% da esquerda
    top: '210%', // Move o elemento para 204% do topo
},
'ca'
); // Sincronizado com a animação nomeada 'ca'




