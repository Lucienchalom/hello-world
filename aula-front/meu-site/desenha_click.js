const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

let contador = 0;
var cores = ['blue','red','green'];
var raio = 10;

const desenhaBolinha = (evento) => {
	const x = evento.pageX - tela.offsetLeft;
	const y = evento.pageY - tela.offsetTop; 

	if(evento.shiftKey && evento.altKey){
		alert('Cuidado! Uma tecla de cada vez ;)');
	}
	if(raio < 40 && evento.shiftKey == true){
		raio = raio + 10;
	}

	if(raio > 10 && evento.altKey == true){
		raio = raio - 5;
	}
	pincel.fillStyle = cores[contador];
	pincel.beginPath();
	pincel.arc( x, y, raio, 0, 2*3.14);
	pincel.fill();
}

const mudaCor = () => {
	contador++;
	if(contador >= cores.length) {
		contador = 0 ;
	}
	return false;
}

tela.onclick = desenhaBolinha;
tela.oncontextmenu = mudaCor;