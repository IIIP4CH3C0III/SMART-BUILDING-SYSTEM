<?php

/*
 * Após o utilizador preencher os formulários presentes na adição pra a base de dados, será enviado a informação para o php
 * Onde apenas será compilada numa query e enviada pra base de dados. (Não é a prova de sql injection)
 */


	//se receber um post com fatal error correr este comando no container do webserver $docker-php-ext-install mysqli
	if( $_SERVER['REQUEST_METHOD'] === 'POST' )
	{	
		// Definições da conexão á base de dados
	    $MYSQL_SERVERNAME = 'db';
	    $MYSQL_USERNAME = 'admin';
	    $MYSQL_PASSWORD = 'LaGcd62EpArSTt5B';
	    $MYSQL_DB = 'sbs';

	    // Criar a conexão
	    $conn = new mysqli($MYSQL_SERVERNAME,$MYSQL_USERNAME,$MYSQL_PASSWORD,$MYSQL_DB);

	    if ( $conn->connect_error )
	    	die("error_1");

	    // Nome da tabela de pesquisa
		$table_name = $_POST['TABLE'];

		if( $table_name === 'CLIENTS' )
		{
			$fields = "ID_CLIENT,FULL_NAME,CONTACT,EMAIL,NIF,BI,LAST_LOGOUT,LEVEL,ID_SESSON,PASSWORD,ROOM";
			
			//capturar os dados enviados pelo javascript
			$given_name = $_POST['FULL_NAME'];
			$given_contact = $_POST['CONTACT'];
			$given_email = $_POST['EMAIL'];
			$given_nif = $_POST['NIF'];
			$given_bi = $_POST['BI'];
			$given_level = $_POST['LEVEL'];
			$given_room = $_POST['ROOM'];

			$values = "Null," . $give_name . "," . $give_email . "," . $give_email . "," . $give_nif . "," . $give_bi . ",Null," . $give_level . ",RANDOM_ID,random_password" . $given_room  ;

			// Query de SQL para procurar pelo username
			$sql = "INSERT INTO $table_name ($fields) VALUES ($values); ";

			// Pedido na base de dados, com sua resposta em result
			$result = $conn->query($sql);

			if ( $result ) 
			{ //sucesso na inserção dos dados
				$conn->close();
				die ("sucess");
			} 
			else 
			{ //erro na inserção dos dados
				$conn->close();
				die ("error_3");
			}

		}

		
		if( $table_name === 'DEVICES' )
		{
			$fields = "ID_DEVICE,NAME,SERIALNUMBER,OUTPUT,STATE,ROOM,LAST_UPDATE,LEVEL ";

			$given_name = $_POST['FULL_NAME'];
			$given_serial = $_POST['SERIALNUMBER'];
			$given_room = $_POST['ROOM'];

			$values = "Null," . $give_name . "," . $given_serial . ",Null,Null," . $given_room . "Null,Null" ;

			// Query de SQL para procurar pelo username
			$sql = "INSERT INTO $table_name ($fields) VALUES ($values); ";

			// Pedido na base de dados, com sua resposta em result
			$result = $conn->query($sql);

			if ( $result ) 
			{ //sucesso na inserção dos dados
				$conn->close();
				die ("sucess");
			} 
			else 
			{ //erro na inserção dos dados
				$conn->close();
				die ("error_3");
			}

		}

	}
?>