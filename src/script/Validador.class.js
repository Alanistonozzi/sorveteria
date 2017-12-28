class Validador {

	validarEmail (email) {
		return (
			!this.vazio(email) &&
			this.temA(email) &&
			this.com(email))
	}

	validarNome (nome) {
		return (
			!this.vazio(nome) &&
			this.palavra(nome))
	}

	validarMsg (msg) {
		return ( 
			!this.vazio(nome))
	}

	vazio (text) {
		return text.trim() === ''
	}

	temA (text) {
		return text.search('@') !== -1
	}

	com (text) {
		return text.search('.com') !== -1
	}

	palavra (text) {
		return text.trim().search(' ') !== -1
	}

}