<!DOCTYPE html>

<html lang="pt">

	<head>
		<?php include 'header.php'; ?>
		<title> SmartBuilingSystem </title>
	</head>

	<body onload="default_values(2);">
		<?php include 'topbar.php'; ?>

		<main class="main">
			<div class="grid-container">
				<div class="card">
					<p>Energia consumida</p>	
					<p>Energia produzida</p>	
					<p>Água consumida</p>	
					<p>Água atual</p>	
				</div>

				<div class="card"><h2 class="text">Dados de controlo da planta</h2></div>
				<div class="card"><h2 class="text">Planta edifício</h2></div>
				<div class="card">
					<div class="content">
						<div class="table_db">	
							<div class="row">
								<div class="row_text" id="full">
									<div class="row2_field" id="f1">ID</div>
									<div class="row2_field" id="f2">Dispositivo</div>
									<div class="row2_field" id="f3">SN</div>
									<div class="row2_field" id="f4">Estado</div>
									<div class="row2_field" id="f5">Edifico</div>
									<div class="row2_field" id="f6">Andar</div>
									<div class="row2_field" id="f7">Divisão</div>
									<div class="row2_field" id="f8">Data</div>
									<div class="row2_field" id="f9">Grau</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<div class="card">
					<div class="content_res">
						<div class="table_db">	
							<div class="row">
								<div class="row_text" id="full">
									<div class="row2_field" id="f1">ID</div>
									<div class="row2_field" id="f2">Dispositivo</div>
									<div class="row2_field" id="f3">SN</div>
									<div class="row2_field" id="f4">Estado</div>
									<div class="row2_field" id="f5">Edifico</div>
									<div class="row2_field" id="f6">Andar</div>
									<div class="row2_field" id="f7">Divisão</div>
									<div class="row2_field" id="f8">Data</div>
									<div class="row2_field" id="f9">Grau</div>
								</div>
							</div>
						</div>	
					</div>
					<div class="content_res" id="rowContainer">
					</div>
				</div>
			</div>
		</main>
	</body>
</html>