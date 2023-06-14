<?php
	
/*
 * Mostrar informação 
 */ 
	
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

		// Numéro de tabelas
		$NumberOfRows = $_POST['N_ROWS'];

		// Valores das colunas 
		$columns = "ID_CLIENT,FULL_NAME,CONTACT,EMAIL,NIF,BI";

		// Query de SQL para procurar pelo username
		$sql = "SELECT ($columns) FROM $table_name LIMIT $NumberOfRows";

		// Pedido na base de dados, com sua resposta em result
		$result = $conn->query($sql);

		// Resposta
		$response = "" ;

		if ( $result->num_rows > 0 )
		{
			//guardar em row, a informação contida numa das linhas onde encontrou a informação
			while ($row = $result->fetch_assoc()) 
			{
				// Buscar os valores de cada linha
				$ID_CLIENT = $row['ID_CLIENT'];
				$FULL_NAME = $row['FULL_NAME'];
				$CONTACT = $row['CONTACT'];
				$EMAIL = $row['EMAIL'];
				$NIF = $row['NIF'];
				$BI = $row['BI'];

				//TODO
				$response += $ID_CLIENT . ";" . $FULL_NAME . ";" . $CONTACT . ";" ;
			}
		}
	}
?>