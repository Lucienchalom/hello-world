const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect( 0, 0, 600, 400);

var x = 300;
var y = 200;

var esquerda = 37;
var direita = 39;
var cima = 38;
var baixo = 40;

const taxa = 10;

const recebeTeclado = (evento) => {
    if (evento.keyCode == esquerda){ x = x - taxa;}
    if (evento.keyCode == cima){y = y - taxa;}
    if(evento.keyCode == direita){x = x + taxa;}
    if(evento.keyCode == baixo){y = y + taxa;}

}
const desenhaCirculo = ( x, y, raio) => {
	pincel.fillStyle = 'violet';
	pincel.beginPath();
	pincel.arc(x, y, raio, 0, 2* Math.PI);
	pincel.fill();
}

const animaBolinha = () =>{
	pincel.clearRect( 0, 0, 600, 400);
	desenhaCirculo( x, y, 20);
}

setInterval( animaBolinha , 20);
document.onkeydown = recebeTeclado;