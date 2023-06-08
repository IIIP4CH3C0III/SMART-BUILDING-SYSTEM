<?php

    $connect = mysqli_connect(
        'db',
        'admin',
        'LaGcd62EpArSTt5B',
        'sbs',
    );

    $table_name = "CLIENTS";

    $query = "SELECT * FROM $table_name";

    $response = mysqli_query($connect, $query);

    echo "<strong>$table_name: <strong>";
    while($i = mysqli_fetch_assoc($response))
    {
        echo "<p>".$i['FULL_NAME']."<p>";
    }


    /*

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

                //efetuar a conexão com a base de dados
                if ( $connect->connect_error )
                    die( "error_1" );

                // Nome da tabela de pesquisa
                $table_name = "CLIENTS";

                // Query de SQL para procurar pelo username
                $query = "SELECT * FROM $table_name WHERE username = ?";

                // Executar a query, evitando sql injection, e em result iremos obter o a linha correspondente senão null 
                $stmt = $conn->prepare($query);
                $stmt->bind_param("s", $username); //enviaremos por parametro o username por tipo string ("s"), 
                $stmt->execute();
                $result = $stmt->get_result();


                if( $result->num_rows > 0 )
                {
                    $row = $result->fetch_assoc();
                    $stored_password = $row['PASSWORD'];

                    // Temporário 
                    $name = $row['FULL_NAME'];  
                    $level = $row['LEVEL'];
                    $session_id = $row['ID_SESSON'];


                    if($stored_password === $password)  //futuramente utilizar a função password_verify(enviada,guardada)
                        echo "success,${name},${level},${session_id}" ;
                    else
                        echo "error_2";
                }
                else
                    echo "error_2";
                
                $stmt->close();
                $connect->close();
            }


    */
?>