<!DOCTYPE html>

<html lang="pt">

	<head>
		<?php include 'header.php'; ?>
		<title> SmartBuilingSystem </title>
	</head>

	<body onload="default_values(3);">
		<?php include 'topbar.php'; ?>

		<div class="content_background">
			<div class="content">
				<select class="container" id="textbox_l">
					<option value="1" selected disabled>Listar Bases de dados</option>
					<option value="1"> Clientes </option>
					<option value="2"> Dispositivos </option>
				</select>

				<div class="icons_content" id="ic_l">
					<a href="#" onclick="load_table(1);"> <i class="fa-solid fa-rotate-right fa-lg"></i> </a>
				</div>
				<div class="icons_content" id="ic_r" >
					<a type="button" class ="icon_content" id="add_db">  </a>
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
						<div class="row_text">
							<div class="row_field" id="f1">ID</div>
							<div class="row_field" id="f2">Nome</div>
							<div class="row_field" id="f3">Contacto</div>
							<div class="row_field" id="f4">Email</div>
							<div class="row_field" id="f5">NIF</div>
							<div class="row_field" id="f6">BI</div>
						</div>
						<div class="row_icons">
							<a class="row_icon" > Editar </a>
							<a class="row_icon" > Remover </a>
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
