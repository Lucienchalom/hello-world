
const desenhaQuadrado = (x, y, tamanho, cor) => {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.fill();
}

const desenhaCirculo = (x, y, raio, cor) => {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

const desenhaPaletaDeCores = () => {

    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');
    desenhaQuadrado(xAmarelo, yQuadrados, tamanhoQuadrados, 'yellow');
    desenhaQuadrado(xRoxo, yQuadrados, tamanhoQuadrados, 'violet');
    desenhaQuadrado(xLaranja, yQuadrados, tamanhoQuadrados, 'orange');
}

const lidaComMovimentoDoMouse = (evento) => {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(desenha && desenharNoBotão(x,y)) {
        desenhaCirculo(x, y, 5, corAtual);
    }
}

const habilitaDesenhar = () => desenha = true;

const desabilitaDesenhar = () => desenha = false;

var desenharNoBotão = (x,y)=>{

    if(x < (tamanhoQuadrados*6 + 5) && y < tamanhoQuadrados + 5){
        return false;
    }else {
        return true;
    }// 5 é o raio, pra bolinha não entrar nem pela metade na Paleta

}

var mudaCor = (evento) => {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(y < tamanhoQuadrados){
        if(x < (xVermelho + tamanhoQuadrados)){
            corAtual = 'red';
        }else if (x < (xVerde + tamanhoQuadrados)){
            corAtual = 'green';
        }else if(x < (xAzul + tamanhoQuadrados)){
            corAtual = 'blue';
        }else if(x < (xAmarelo + tamanhoQuadrados)){
            corAtual = 'yellow';
        }else if(x < (xRoxo + tamanhoQuadrados)){
            corAtual = 'violet';
        }else if(x < (xLaranja + tamanhoQuadrados)){
            corAtual = 'orange';
        }
    } 
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = 'blue';
const xVermelho = 0;
const xVerde  = 50;
const xAzul = 100;
const xAmarelo = 150;
const xRoxo = 200;
const xLaranja = 250;

var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = mudaCor;
