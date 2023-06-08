<?php

	//se receber um post!
	if( $_SERVER['REQUEST_METHOD'] === 'POST' )
	{
		//capturar os dados enviados pelo javascript
		$username = $_POST['username'];
		$password = $_POST['password'];

		// Definições da conexão á base de dados
		$connect = mysqli_connect(
	        'db',
	        'admin',
	        'LaGcd62EpArSTt5B',
	        'sbs',
		);

		// Nome da tabela de pesquisa
		$table_name = "CLIENTS";

		// Query de SQL para procurar pelo username
		$query = "SELECT * FROM $table_name WHERE username = $username";

		// Pedido na base de dados
		$response = mysqli_query($connect, $query);

		//linha de resposta
		$row = mysqli_fetch_assoc($response);

        $name = $row['FULL_NAME'];  
        $level = $row['LEVEL'];
        $session_id = $row['ID_SESSON'];

        echo "success,${name},${level},${session_id}" ;


	}
?>