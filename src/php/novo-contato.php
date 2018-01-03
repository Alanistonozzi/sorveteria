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






















 require 'PHPMailerAutoload.php';


$mail = new PHPMailer(true);
$mail->IsSMTP(); 

try {
     $mail->Host = 'smtp.http://localhost/contato/'; 
     $mail->SMTPAuth   = true; 
     $mail->Port       = 587; 
     $mail->Username = ''; 
     $mail->Password = ''; 
 
     
     $mail->SetFrom($email); 
     $mail->AddReplyTo($email); 
     $mail->Subject = 'dados da msg';
 
 
     
     $mail->AddAddress('alan.tonozzi5@gmail.com.br');
 
    









































































	function validarNome ($nome) {
		return !ehVazio($nome) && ehUmaPalavraSoh($nome)
	}

	function validarEmail ($email) {
		return !ehVazio($email) && ehUmaPalavraSoh($email) && temArroba($email)
	}

	function validarMsg ($msg) {
		return !ehVazio($msg)
	}

	function ehVazio ($texto) {
		return trim($texto) === ''
	}

	function ehUmaPalavraSoh ($texto) {
		return strchr(trim($texto), ' ') === false
	}

	function temArroba ($texto) {
		return strchr(trim($texto), '@') !== false
	}

?>