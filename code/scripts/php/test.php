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

?>