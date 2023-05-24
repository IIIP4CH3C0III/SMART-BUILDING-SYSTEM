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
				<div class="card"><h2 class="text">Resumo anomalias</h2></div>
				<div class="card"><h2 class="text">Resumo logs</h2>
					<div class="content_res">
						<div class="table_db">	
							<div class="row">
								<div class="row_text">
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
					<div class="content_res" id="rowContainer">
						
					</div>
				</div>
			</div>
		</main>
	</body>
</html>