<?php
// Read the existing JSON data from the file
$filename = 'JSON/dados.json';
$existingData = file_get_contents($filename);

// Parse the existing JSON data into an array
$dataArray = json_decode($existingData, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Check the form name to determine which form was submitted
  if ($_POST['formName'] === 'clientes') {
    // data dos clientes
    $id = $_POST['id1'];
    $edifício = $_POST['edifício1'];
    $andar = $_POST['andar1'];
	$divisão = $_POST['divisão1'];
	$estado = $_POST['estado1'];
	$descrição = $_POST['descrição1'];
	$hora = $_POST['hora1'];
	$data = $_POST['data1'];
	$grau = $_POST['grau1'];
  } elseif ($_POST['formName'] === 'dispositivos') {
    // data dos dispositivos
    $name = $_POST['name2'];
    $age = $_POST['age2'];
    $city = $_POST['city2'];
  }

  // Create a new entry to add to the existing data
  $newEntry = array(
    "name" => $name,
    "age" => $age,
    "city" => $city
  );

  // Add the new entry to the existing data
  $dataArray[] = $newEntry;

  // Convert the updated data to JSON format
  $updatedData = json_encode($dataArray, JSON_PRETTY_PRINT);

  // Write the updated JSON data back to the file
  if (file_put_contents($filename, $updatedData)) {
    echo 'Data appended to JSON file successfully.';
  } else {
    echo 'Error writing to JSON file.';
  }
}
?>
?>
