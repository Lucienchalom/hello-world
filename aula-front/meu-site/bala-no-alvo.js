const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

const raio = 10;

let alvoX;
let alvoY;

const sorteiaPosicao = (maximo) => valorSorteado = Math.floor(Math.random()*maximo);

const desenhaCirculo = (alvoX, alvoY, raio, cor) => {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(alvoX, alvoY, raio, 0, 2 * Math.PI);
    pincel.fill();
}
desenhaAlvo = () => {
    do{
        alvoX = sorteiaPosicao(600 - (raio * 3));
    }
    while(alvoX < (raio * 3));

    do{
        alvoY = sorteiaPosicao(400 - (raio * 3));
    }
    while(alvoY < (raio * 3));

	console.log(alvoX, alvoY);
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 600, 400);

    desenhaCirculo(alvoX, alvoY, raio + (raio * 2), 'red'); // maior círculo
    desenhaCirculo(alvoX, alvoY, raio + raio, 'white');
    desenhaCirculo(alvoX, alvoY, raio, 'red'); // menor circulo
}
const dispara = (evento) => {
    const clicaX = evento.pageX - 300; // ajustar com position left do canvas no css
    const clicaY = evento.pageY - 85; // ajustar com o header
   // lógica de acerto
   if( (clicaX > alvoX - raio) 
      && (clicaX < alvoX + raio) 
        && (clicaY > alvoY - raio) 
          && (clicaY < alvoY + raio) ) {
            alert ("acertou!");
          }
	console.log(clicaX, clicaY)
}
tela.onclick = dispara;
setInterval(desenhaAlvo, 1000);