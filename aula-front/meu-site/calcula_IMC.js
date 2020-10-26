const mostra = (evento) => {
	evento.preventDefault();
	const resultadoImc = realizaCalculo();
	const textoGerado = geraTexto(resultadoImc);

	document.getElementById("nomeResultado").innerHTML = textoGerado
}

const realizaCalculo = () =>{
	const name = document.querySelector("#nome").value;
	const alturaInformada = +document.querySelector("#altura").value; 
	const pesoInformado = +document.querySelector("#peso").value; 
	const imcInformado = pesoInformado /(alturaInformada*alturaInformada);
	console.log (alturaInformada, pesoInformado)
	return imcInformado
}										

const geraTexto =(imcInformado) => {
	const name = document.querySelector("#nome").value;
	console.log (name)
	let texto = "";
	if(imcInformado < 17) {
		texto = `Olá ${name}! O seu IMC foi de ${Math.round(imcInformado)} o que indica que você está muito abaixo do peso ideal. Por favor, se cuide. ^^`;
	}
	else if(imcInformado < 18.49 && imcInformado > 17 ) {	
		texto = `Olá ${name}! O seu IMC foi de ${Math.round(imcInformado)} o que indica que você está abaixo do peso ideal.`;
	}
	else if(imcInformado < 24.99 && imcInformado > 18.50){
		texto = `Olá ${name}! O seu IMC foi de ${Math.round(imcInformado)} o que indica que você está no peso ideal. Parabéns!!`;
	}
	else if(imcInformado < 29.99 && imcInformado > 25 ){
		texto = `Olá ${name}! O seu IMC foi de ${Math.round(imcInformado)} o que indica que você está acima do peso ideal.`;
	}
	else if(imcInformado > 30){
		texto = `Olá ${name}! O seu IMC foi de ${Math.round(imcInformado)} o que indica que você está bastante acima do peso ideal. Por favor, se cuide. ^^ `; 
	}
	return texto 
}

var calcular = document.querySelector("button")
calcular.onclick = mostra;