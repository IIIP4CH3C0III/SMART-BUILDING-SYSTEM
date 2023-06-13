<?php

/*
 * Após o utilizador carregar no logout, será enviado o sessonID para o php, onde será procurado na base de dados este utilizador, 
 * Em seguida, será dado update do campo last_logout de acordo com a data e hora atuais;
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
        $table_name = "CLIENTS";

        // Capturar session ID do user
        $given_ID = $_POST['ID'];

        // Ĉapturar a data
        // Definir a timezone
        date_default_timezone_set('Europe/Lisbon');

        // O formato da data e variavél em si
        $date = date('H:i:s d-m-Y');

        // Query de SQL para procurar pelo username
        $sql = "UPDATE $table_name SET LAST_LOGOUT = '$date' WHERE ID_SESSON = '$given_ID'";

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
?>