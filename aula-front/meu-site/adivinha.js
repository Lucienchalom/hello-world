
const numeroPensado = Math.round(Math.random()*10);
console.log(numeroPensado);	

const input = document.querySelector("input");
input.focus();

const verifica = () => {
	if(input.value == numeroPensado ) {
		alert("Parabéns, você acertou!");
	} else if(input.value > numeroPensado) {
		alert("Poxa, o numero aleatório era menor do que " + input.value);
	}
	if(numeroPensado > input.value) {
		alert("Poxa, o numero aleatório era maior do que " + input.value);
	}
	input.value = "";
	input.focus(); 
}

const botao = document.querySelector("button");
botao.onclick = verifica;