<?php
	$nome  =	 $_GET['nome'];
	$email =	 $_GET['email'];
	$msg   =  	 $_GET['msg'];

	if (
		!validarNome($nome) ||
		!validarEmail($email) ||
		!validarMsg($msg)
	) {
		throw new Exception('Campo inválido');
	}

	echo "o nome é"  .  $nome;
	echo "o email é" . $email;
	echo "a msg é "  .  $msg;























 
    











// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
require_once('../PHPMailer/src/PHPMailer');//já tentei sem ../ também
// Inicia a classe PHPMailer
$mail = new PHPMailer();
// Define os dados do servidor e tipo de conexão
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(true); // Define que a mensagem será SMTP
$mail->Host = "smtp.gmail.com"; // Endereço do servidor SMTP
$mail->Port = 587;
$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
$mail->SMTPSecure = 'ssl';
$mail->Username = 'alanisteste@gmail.com'; // Usuário do servidor SMTP
$mail->Password = 'kheleseldamea003liber'; // Senha do servidor SMTP
// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = "alanisteste@gmail.com"; // Seu e-mail
$mail->FromName = "Alanis"; // Seu nome
// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress('alan.tonozzi5@gmail.com', 'Fulano da Silva');
// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = "Mensagem Teste"; // Assunto da mensagem
$mail->Body = "o nome é".$nome."o email é".$email."a msg é ".$msg;
$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n :)";
// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo
// Envia o e-mail
$enviado = $mail->Send();
// Limpa os destinatários e os anexos
$mail->ClearAllRecipients();
$mail->ClearAttachments();
// Exibe uma mensagem de resultado
if ($enviado) {
  echo "E-mail enviado com sucesso!";
}
else {
  echo "Não foi possível enviar o e-mail.";
  echo "<b>Informações do erro:</b> " . $mail->ErrorInfo;
}





























































	function validarNome ($nome) {
		return !ehVazio($nome) && ehUmaPalavraSoh($nome);
	}

	function validarEmail ($email) {
		return !ehVazio($email) && ehUmaPalavraSoh($email) && temArroba($email);
	}

	function validarMsg ($msg) {
		return !ehVazio($msg);
	}

	function ehVazio ($texto) {
		return trim($texto) === '';
	}

	function ehUmaPalavraSoh ($texto) {
		return strchr(trim($texto), ' ') === false;
	}

	function temArroba ($texto) {
		return strchr(trim($texto), '@') !== false;
	}

?>