<?php

/*
 * Após o utilizador preencher os formulários presentes na adição pra a base de dados, será enviado a informação para o php
 * Onde apenas será compilada numa query e enviada pra base de dados. (Não é a prova de sql injection)
 */

	//função para gerar um random id
	function generateRandomString($length) {
	    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //os caracteres que irá conter
	    $randomString = substr(str_shuffle($pool), 0, $length); //a mistura
	    return $randomString;
	}

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

        // Ĉapturar a data
        // Definir a timezone
        date_default_timezone_set('Europe/Lisbon');

        // O formato da data e variavél data
        $given_date = date('Y-m-d H:i:s');


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

	        //random Session ID
	        $random_id = Frandom_id(16);

			$values = "NULL,'" . $given_name . "','" . $given_contact . "','" . $given_email . "','" . $given_nif . "','" . $given_bi . "','" . $given_date . "','" . $given_level . "','" . $random_id . "','password'" . $given_room . "'" ; 

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

			$values = "NULL,'" . $given_name . "','" . $given_serial . "',NULL,NULL,'" . $given_room . "','" . $given_date . "',NULL" ;

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