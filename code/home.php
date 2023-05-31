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
				<div class="card"><h2 class="text">Dados</h2></div>
				<div class="card"><h2 class="text">Dados de controlo da planta</h2></div>
				<div class="card"><h2 class="text">Planta edifício</h2></div>
				<div class="card"><h2 class="text">Resumo anomalias</h2>
				<div class="content">
				<div class="table_db">	
					<div class="row">
						<div class="row_text" id="full">
							<div class="row2_field" id="f1">DispositivoID</div>
							<div class="row2_field" id="f2">Edifício</div>
							<div class="row2_field" id="f3">Andar</div>
							<div class="row2_field" id="f4">Divisão</div>
							<div class="row2_field" id="f5">Estado</div>
							<div class="row2_field" id="f6">Descrição</div>
							<div class="row2_field" id="f7">Hora</div>
							<div class="row2_field" id="f8">Data</div>
							<div class="row2_field" id="f9">Grau</div>
						</div>
						
					</div>
				</div>	
			</div>
			</div>
				<div class="card"><h2 class="text">Resumo logs</h2>
					<div class="content_res">
						<div class="table_db">	
							<div class="row">
								<div class="row_text" id="full">
									<div class="row2_field" id="f1">DispositivoID</div>
									<div class="row2_field" id="f2">Edifício</div>
									<div class="row2_field" id="f3">Andar</div>
									<div class="row2_field" id="f4">Divisão</div>
									<div class="row2_field" id="f5">Estado</div>
									<div class="row2_field" id="f6">Descrição</div>
									<div class="row2_field" id="f7">Hora</div>
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