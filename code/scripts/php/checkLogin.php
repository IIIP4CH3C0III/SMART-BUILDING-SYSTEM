<?php

	if( $_SERVER['REQUEST_METHOD'] === 'POST' )
	{
		$username = $_POST['username'];
		$password = $_POST['password'];

		$name = 'Maria Chaveiro';
		$level = '2';
		$session_id = 'IDCONNECTED';

		if($username === 'admin' && $password === 'admin')
			echo "success,${name},${level},${session_id}" ;
	}

?>