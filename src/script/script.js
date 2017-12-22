var input_nome = document.querySelector(".input_nome");
var input_email = document.querySelector(".input_email");
var input_comentario = document.querySelector(".input_comentario");
var botao_enviar = document.querySelector(".botao_enviar");

function okin(){
	console.log("Focusin funcionando")	
};

function okout(){
	console.log("focusout funcionando")
};

function okclick(){
	console.log("click funcionando")
};

input_nome.addEventListener("focusin", okin);
input_nome.addEventListener("focusout", okout);

input_email.addEventListener("focusin",okin);
input_email.addEventListener("focusout", okout);

input_comentario.addEventListener("focusin",okin);
input_comentario.addEventListener("focusout", okout);

botao_enviar.addEventListener("click",okclick);

		
