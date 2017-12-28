var validador = new Validador();


var inputNome = document.querySelector("#input-nome");
var inputEmail = document.querySelector("#input-email");
var inputComentario = document.querySelector("#input-comentario");
var botaoEnviar = document.querySelector("#button-enviar");
 

function nomeIn(){
	inputNome.classList.add('input_active')

};

function nomeOut(){
	inputNome.classList.remove('input_active')

	var valor = inputNome.querySelector("input").value
	var valid = validador.validarNome(valor)

	if (valid) {
		inputNome.classList.remove("input_invalid")
		
	} else {
	 	inputNome.classList.add("input_invalid")
	}

};
function nomeinvalid(){
	inputNome.classList.add("input_invalid")
}
//funções email

function emailIn(){
	inputEmail.classList.add("input_active")

};

function emailOut(){
	inputEmail.classList.remove("input_active")	

};
//funções comentários 
function comentarioIn(){
	inputComentario.classList.add("input_active")

};
function comentarioOut(){
	inputComentario.classList.remove("input_active")

}; 

//click 
function okclick(){
	console.log("click funcionando")
};


inputNome.addEventListener("focusin", nomeIn);
inputNome.addEventListener("focusout", nomeOut);

inputEmail.addEventListener("focusin",emailIn);
inputEmail.addEventListener("focusout", emailOut);

inputComentario.addEventListener("focusin",comentarioIn);
inputComentario.addEventListener("focusout", comentarioOut);

botaoEnviar.addEventListener("click",okclick);

//classes

	