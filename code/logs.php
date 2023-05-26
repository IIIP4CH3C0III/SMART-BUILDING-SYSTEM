<!DOCTYPE html>

<html lang="pt">

	<head>
		<?php include 'header.php'; ?>
		<title> SmartBuilingSystem </title>
	</head>

	<body onload="default_values(4);">
		<?php include 'topbar.php'; ?>

		<div class="content_background">
			<div class="content">
				<div class="container" id="textbox_l">
					<p> LOGS</p>
				</div>

				<div class="icons_content" id="ic_l">
					<a href="#" onclick="load_table2();"> <i class="fa-solid fa-rotate-right fa-lg"></i> </a>
				</div>
				<div class="icons_content" id="ic_r">
					<a href="#"> <i class="fa-solid fa-filter fa-lg"></i> </a>
				</div>


				<select class="container" id="textbox_r">
					<option value="" selected disabled>Filtragem</option>
					<option value="1"> A-Z </option>
					<option value="2"> Z-A </option>
				</select>

			</div>


			<div class="content">
				<div class="table_db">	
					<div class="row">
						<div class="row_text" id="full">
							<div class="row_field" id="l1">DispositivoID</div>
							<div class="row_field" id="l2">Edifício</div>
							<div class="row_field" id="l3">Andar</div>
							<div class="row_field" id="l4">Divisão</div>
							<div class="row_field" id="l5">Estado</div>
							<div class="row_field" id="l6">Descrição</div>
							<div class="row_field" id="l7">Hora</div>
							<div class="row_field" id="l8">Data</div>
							<div class="row_field" id="l9">Grau</div>
						</div>
						
					</div>
				</div>	
			</div>

			<div class="content" id="rowContainer">
			</div>

			<div class="content">
				<div class="box_left_pos"></div>
				<select class="container" id="listbox_bottom">
					<option value="5" >5</option>
					<option value="10" >10</option>
					<option value="20" >20</option>
					<option value="30" >30</option>
					<option value="40" >40</option>
					<option value="50" >50</option>
				</select>
			</div>

			<div class="content">
			</div>
		</div>
		
		<div class="content_background">
			<div class="content">
				<div class="container" id="textbox_l">
					<p> ANOMALIAS</p>
				</div>

				<div class="icons_content" id="ic_l">
					<a href="#" onclick="load_table2();"> <i class="fa-solid fa-rotate-right fa-lg"></i> </a>
				</div>
				<div class="icons_content" id="ic_r">
					<a href="#"> <i class="fa-solid fa-filter fa-lg"></i> </a>
				</div>


				<select class="container" id="textbox_r">
					<option value="" selected disabled>Filtragem</option>
					<option value="1"> A-Z </option>
					<option value="2"> Z-A </option>
				</select>

			</div>


			<div class="content">
				<div class="table_db">	
					<div class="row">
						<div class="row_text" id="full">
							<div class="row_field" id="l1">DispositivoID</div>
							<div class="row_field" id="l2">Edifício</div>
							<div class="row_field" id="l3">Andar</div>
							<div class="row_field" id="l4">Divisão</div>
							<div class="row_field" id="l5">Estado</div>
							<div class="row_field" id="l6">Descrição</div>
							<div class="row_field" id="l7">Hora</div>
							<div class="row_field" id="l8">Data</div>
							<div class="row_field" id="l9">Grau</div>
						</div>
						
					</div>
				</div>	
			</div>

			<div class="content" id="rowContainer">
			</div>

			<div class="content">
				<div class="box_left_pos"></div>
				<select class="container" id="listbox_bottom">
					<option value="5" >5</option>
					<option value="10" >10</option>
					<option value="20" >20</option>
					<option value="30" >30</option>
					<option value="40" >40</option>
					<option value="50" >50</option>
				</select>
			</div>

			<div class="content">
			</div>
		</div>
	</body>

</html>