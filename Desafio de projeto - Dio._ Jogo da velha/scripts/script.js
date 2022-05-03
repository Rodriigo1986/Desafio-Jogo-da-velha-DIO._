
var Jogador = null ;
var Vencedor = null;
var Jogadorselecionado = document.getElementById("Jogador-selecionado");
var Vencedorselecionado = document.getElementById("Vencedorselecionado");

mudarJogador('x');

function escolherQuadrado(id){
    if (Vencedor !== null){
        return;
    }

var quadrado = document.getElementById(id);
if (quadrado.innerHTML !== '-') {
    return; 
}

quadrado.innerHTML = Jogador ;
quadrado.style.color = '#000';

if (Jogador === 'x'){
    Jogador = 'o';
} else {
    Jogador = 'x';
}

mudarJogador(Jogador);
checarVencedor();
    
}  
function mudarJogador (valor){
    Jogador = valor;
    Jogadorselecionado.innerHTML = Jogador;
}
function checarVencedor () {
    var quadrado1 = document.getElementById (1);
    var quadrado2 = document.getElementById (2);
    var quadrado3 = document.getElementById (3);
    var quadrado4 = document.getElementById (4);
    var quadrado5 = document.getElementById (5);
    var quadrado6 = document.getElementById (6);
    var quadrado7 = document.getElementById (7);
    var quadrado8 = document.getElementById (8);
    var quadrado9 = document.getElementById (9);

    if (checarsequencia (quadrado1, quadrado2, quadrado3)){
       mudarCorquadrado (quadrado1, quadrado2, quadrado3);
       mudarVencedor (quadrado1);
       return;
}
    if (checarsequencia (quadrado4, quadrado5, quadrado6)){
        mudarCorquadrado (quadrado4, quadrado5, quadrado6);
        mudarVencedor (quadrado4);
        return;
}
    if (checarsequencia (quadrado7, quadrado8, quadrado9)){
    mudarCorquadrado (quadrado7, quadrado8, quadrado9);
    mudarVencedor (quadrado7);
    return;
    }
    if (checarsequencia (quadrado1, quadrado4, quadrado7)){
        mudarCorquadrado (quadrado1, quadrado4, quadrado7);
        mudarVencedor (quadrado1);
    }
    if (checarsequencia (quadrado2, quadrado5, quadrado8)){
        mudarCorquadrado (quadrado2, quadrado5, quadrado8);
        mudarVencedor (quadrado2);
        return;
    }
    if (checarsequencia (quadrado3, quadrado6, quadrado9)){
        mudarCorquadrado (quadrado3, quadrado6, quadrado9);
        mudarVencedor (quadrado3);
        return;
    }
    if(checarsequencia (quadrado1, quadrado5, quadrado9)){
        mudarCorquadrado (quadrado1, quadrado5, quadrado9);
        mudarVencedor (quadrado1);
        return;
    }
    if (checarsequencia (quadrado3, quadrado5, quadrado7)){
        mudarCorquadrado (quadrado3, quadrado5, quadrado7);
        mudarVencedor (quadrado3);
    }
}
function mudarVencedor(quadrado){
Vencedor = quadrado.innerHTML;
Vencedorselecionado.innerHTML = Vencedor;
}

function mudarCorquadrado (quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}
function checarsequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    eigual = true;

    }
    return eigual;
}
function reiniciar() {
    Vencedor = null;
    Vencedorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background ='#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-' ;
    }
    mudarJogador ('x') ;
}

