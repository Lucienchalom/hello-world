const random = () => Math.round(Math.random() * 10);  

const sorteia = (quantidade) => {
	const segredos = [];
	let contador = 1; 
	while(contador <= quantidade) {
	 	const numeroAleatorio = random();
	 	if(numeroAleatorio != 0) {
	 		let tem = false; 
	 	
 			for(let posição = 0; posição < segredos.length; posição ++) {
	 		 	if(numeroAleatorio == segredos[posição] ) {
	 			 	tem = true;
				 	break;
 			 	}
		 	}
 		 	if(tem == false){
 		 		segredos.push(numeroAleatorio);
			 	contador++;
			}
 		}
	}
	return segredos;
}

var segredos = sorteia(3);// quantos valores possiveis na array
console.log(segredos);
var input = document.querySelector("input");
input.focus();

const verifica = () => {
	var sucesso = false;
	for(var posicao = 0; posicao < segredos.length; posicao ++){
		if(input.value == segredos[posicao]) {
			alert("Parabéns, você acertou!");
			sucesso = true;
			break;
		} 
	}
	if(sucesso == false) alert("Você errou, que pena");

	input.value = "";
	input.focus(); 
}

const botao = document.querySelector("button");
botao.onclick = verifica;