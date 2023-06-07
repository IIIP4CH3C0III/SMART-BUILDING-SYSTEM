<!DOCTYPE html>

<html lang="pt">

	<head>
		<?php include 'header.php'; ?>
		<title> SmartBuilingSystem </title>
	</head>

	<body class="login" onload="default_values(1);">

		<?php include 'scripts/php/test.php' ?>

		<div  class="login_block" id="zoom">
			<div class="login_logo">
				<img src="images/logo.svg" alt="logo">
			</div>

			<form>
				<div class="content">
					<input class="container" type="text" id="textbox_full_center" placeholder="Nome de utilizador">
				</div>
				<div class="content">
					<input class="container" type="password" id="textbox_full_center" placeholder="Palavra-Chave">
				</div>
			</form>

			<div class="vertical_spacer"></div>

			<div class="content">
				<button class="container" id="login_bottom" value="Submit">ENTRAR</button>
			</div>

			<div class="content">
				<div class="login_warnings" id="warning_message"> 
				</div>								
			</div>
				

			<div class="vertical_spacer"></div>

			<div class="login_text">
				<p>Esqueceu a password? Problemas com o Login?</p> 
				<p>Obtenha informacões contactando o administrador.</p>
				<p>email : admin@example.com</p>
			</div>
			
		</div>
		
	</body>
</html>
