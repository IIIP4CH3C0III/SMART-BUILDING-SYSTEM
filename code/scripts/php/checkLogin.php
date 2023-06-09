<?php

	//se receber um post! cmd : docker-php-ext-install mysqli
	if( $_SERVER['REQUEST_METHOD'] === 'POST' )
	{
		//capturar os dados enviados pelo javascript
		$given_username = $_POST['username'];
		$given_password = $_POST['password'];

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
		$table_name = "CLIENTS";

		// Query de SQL para procurar pelo username
		$sql = "SELECT * FROM $table_name WHERE FULL_NAME = '$given_username'";

		// Pedido na base de dados, com sua resposta em result
		$result = $conn->query($sql);

		if ( $result->num_rows > 0 )
		{
			//guardar em row, a informação contida numa das linhas onde encontrou a informação
			$row = $result->fetch_assoc();
			$stored_password = $row["PASSWORD"];

			if ( $given_password != $stored_password )
			{
				$conn->close();
				die ("error_2");
			}


			$name = $row['FULL_NAME'];  
	        $level = $row['LEVEL'];
	        $session_id = $row['ID_SESSON'];

	        echo "success,${name},${level},${session_id}" ;

		}		

		$conn->close();

	}
?>

